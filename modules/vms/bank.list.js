define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		require('../styles/bank.list.css') ;
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "我的银行卡",
					renders : {
						default : {
							model : {
								list : []
							},
							ondraw : function() {
								return new Promise(function(next, fail) {
									app.service.bank.m_carlist({
										token : app.data.user.token
									}, function(data) {
										next({
											list : data.bankCardVoList
										}) ;
									}, fail)
								}) ;
							}
						}
					},
				},
				methods : {
					m_unbind : function(el) {
						var _id = el.bankCardId ;
						app.modal.m_confirm('提示', '是否确认解绑?', function() {
							var _id = el.bankCardId ;
							app.service.user.m_bankcard_unbind({
								token : app.data.user.token,
								bankCardId : _id
							}, function(data) {
								app.toast.m_show_text('解绑成功') ;
								_vm.$model.list.remove(el) ;
							}) ;
						}) ;
					},
					m_alert : function() {
						
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
				case "save" : { // 监视消息名称
					// ... 
					view.m_downpull() ;
					break ;
				}
			}
		}) ;
	}
}) ;