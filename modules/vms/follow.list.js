define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "关注",
					// virtual_list : new SepVirtualList({
					// 	counter : 50,
					// 	row : 30
					// }),
					renders : {
						default : {
							model : {
								list : []
							},
							ondraw : function() {
								return new Promise(function(next, fail) {
									var _param = {
										token : app.data.user.token,
										pageSize : 99,
										pageIndex : 1
									} ; 
									app.service.follow.m_list(_param, function(data) {
										// _vm.virtual_list.m_bind(data.collectionVOs) ;
										next({
											list : data.collectionVOs
										}) ;
									}, fail) ;
								}) ;
							}
						}
					}
				},
				
				methods : {
					m_toggle_focus : function(el) {
						app.modal.m_confirm('提示', '是否确认取消关注?', function() {
							var _id = el.collectionId ;
							app.service.goods.m_get_attention({
								token : app.data.user.token,
								collectionId : _id
							}, function(data) {
								app.toast.m_show_text('取消成功') ;
								_vm.$model.list.remove(el) ;
								// _vm.virtual_list.m_update(_vm.$model.list) ;

							}) ;
						}) ;
					},
					m_gain : function(el) {
						var _id = el.collectionId ;
						app.service.goods.m_get({
							token : app.data.user.token,
							collectionId : _id
						}, function(data) {
							var _screening_id = data.screeningId ;
							var _url = 'goods.detail?id=' + _id + '&screeningId=' + _screening_id ;
							svc.m_push(_url) ;
						}, function(err) {
							app.modal.m_alert('提示', err.errorMessage) ;
						}) ;
					} 
				}
			}) ;
		}) ;
		view.m_on("draw", function() {
			/* 每当模板渲染时触发 */
			return _vm.m_refresh() ;
		}) ;

		view.m_on("active", function() {
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */	
		}) ;

		view.m_on("enter", function() {
			/* 当 view 进入时触发 */	
		}) ;

		view.m_on("frozen", function() {
			/* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */	
		}) ;

		view.m_on("leave", function() {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
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