define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc, vm) {
		// 做初始化
		// 查询皮肤
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "地址管理",
					from : null,
					renders : {
						default : {
							model : {
								list : [],
								choose_address : {}
							},
							ondraw : function() {
								return new Promise(function(next, fail) {
									app.service.address.m_list({
										token : app.data.user.token
									}, function(ds) {
										var _default_address = ds.defaultAddress ;
										if(_default_address) {
											var _clone_default_address = clone(_default_address) ;	
											if(Object.keys(_clone_default_address).length) {
												_clone_default_address.state = 1 ;
												ds.addressVoList.insert(0, _clone_default_address) ;
											}
										}
										next({
											list : ds.addressVoList,
											choose_address : _default_address
										}) ;
									}, fail) ;
								}) ;
							}
						}
					}
				},
				methods : {
					m_push : function(el) {
						app.session.m_set('operation.address', el) ;
						svc.m_push('address.edit?from=address.list') ;
					},
					m_set_default : function(el) { // 设置默认地址
						// app 更新下
						app.service.address.m_set_default(el._id, function() { // 设置默认地址
							
						}) ;
						var _list = _vm.renders.default.model.list ;
						for(var i = 0; i < _list.length; i++) {
							if(true === _list[i].isdefault) {
								_list[i].isdefault = false ;
							}
						}
						el.isdefault = true ;
					}
				}
			}) ;
		}) ;
	
		view.m_on("active", function() {
			_vm.from = this.query.from ;
		}) ;
		view.m_on("draw", function() {
			return _vm.m_refresh() ;
		}) ;
		view.m_on("message", function(ev, msg) {
			switch(msg.name) {
				case "remove" : { // 刷新掉
					// 如果删除的是当前选中的
					view.m_downpull_refresh() ;
					break ;
				}
				case "save" : {
					view.m_downpull() ;
					break ;
				}
			}
		}) ;
	}
}) ;