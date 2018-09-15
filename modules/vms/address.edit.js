define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : null,
					state : 0,
					renders : {
						default : {
							model : {
								addressDetail : '',
								addressId : null,
								addressee : null,
								mobile : null
							},
							ondraw : function() {
								return new Promise(function(next, fail) {
									var _address = app.session.m_get("operation.address") ;
									// 可以查询原先的记录
									app.service.address.m_list({
										token : app.data.user.token
									}, function(ds) {
										if(_address && ds.defaultAddress && ds.defaultAddress.addressId == _address.addressId) {
											_vm.state = 1 ;
										} else {
											_vm.state = 0 ;
										}
										next(_address) ;
									}, fail) ;
								}) ;
							}
						}
					},
					form : {
						onsubmit : function(data) {
							// 请求接口， 然后保存
							// 需要判断
							data.token = app.data.user.token ;
							var _from = view.query.from ;
							if(this.$model.addressId) {
								data.addressIdCurrent = this.$model.addressId ;
							}
							app.service.address.m_save(data, function(data) {
								view.m_reset_button('.submit') ; 
								app.toast.m_show_text('保存成功!') ;
								if(_vm.state == 1) {
									var _data = data.addressDefaultVo ;
									_data.token = app.data.user.token ;
									app.service.address.m_set_default(_data, function(data) {
										app.session.m_set('address', _data) ;
									}, function(err) {
										app.modal.m_alert('提示', err.errorMessage) ;
									}) ;
								}
								svc.m_back() ;
								svc.m_put_msg(_from, 'save') ;
							}, function(err) {
								if(err.errorCode != 0) {
									app.modal.m_alert('错误', err.msg) ;
									view.m_reset_button('.submit') ;
								}
							}) ;
						},
						oninvalid : function(errs) {
							view.m_reset_button('.submit') ;
						}
					}
				},
				methods : {
					
				}
			}) ;
		}) ;
		view.m_on("draw", function() {
			/* 每当模板渲染时触发 */
			return _vm.m_refresh() ;
		}) ;

		view.m_on("active", function() {
			var _address = app.session.m_get("operation.address") ;
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */	
			_vm.title = _address ? '修改地址' : '新增地址' ;
		}) ;

		view.m_on("enter", function() {
			/* 当 view 进入时触发 */	
		}) ;

		view.m_on("frozen", function() {
			/* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */	
		}) ;

		view.m_on("leave", function() {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
			app.session.m_remove("operation.address") ;
		}) ;

		view.m_on("message", function(ev, msg) {
			/* 当 view 进入后, 从消息队列中获取消息列表, 循环触发 */
			// ev 事件源
			// msg 消息对象 属性: name, params
			switch(msg.name) {
				case "<name>" : { // 监视消息名称
					// ... 
					break ;
				}
			}
		}) ;
	}
}) ;