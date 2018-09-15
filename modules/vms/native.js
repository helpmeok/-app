define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "Native Debug"
				},
				methods : {
					m_get_env : function() {
						var _env = transfer.m_get_env() ;
						app.modal.m_alert('提示', '当前环境: ' + _env) ;
					},
					m_get_user_token : function() { // 用户用户登陆
						transfer.m_get_user_token() ;
					},
					m_pay : function() { // 开始发起支付
						var _orderid = "1034" ;
						transfer.m_pay(_orderid) ;
					},
					m_login : function() { // 用户登陆
						transfer.m_login() ; // 开始登陆
					}
				}
			}) ;

			transfer.onUserToken = function(token) {
				app.modal.m_alert('提示', '用户Token: ' + token) ;
			}
			transfer.onPay = function(args) { // 支付成功回调
				app.modal.m_alert('提示', '支付成功: ' + args) ;
			}

		}) ;
		view.m_on("draw", function() {
			/* 每当模板渲染时触发 */
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