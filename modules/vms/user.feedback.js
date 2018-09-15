define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		require("../styles/user.feedback.css")
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "用户反馈",
					content : '',
					form : {
						onsubmit : function() {  
							// 调用接口
							app.service.user.m_feed_back({
								token : app.data.user.token ,
								feedBack : _vm.content
							}, function(data) {
								view.m_reset_button('.submit') ;
								app.toast.m_show_ok("已提交") ;
								svc.m_back() ;
							},function(err) {
								view.m_reset_button('.submit') ;
								app.toast.m_show_text(err.msg) ;
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
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */	
		}) ;

		view.m_on("enter", function() {
			/* 当 view 进入时触发 */
			setTimeout(function () {
				$$(".content").focus() ;	
			}, 300) ;
		}) ;

		view.m_on("frozen", function() {
			/* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */	
		}) ;

		view.m_on("leave", function() {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
			_vm.content = '' ;
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