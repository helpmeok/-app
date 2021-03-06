define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		require("../../plugs/md5.min.js") ;
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "修改登录密码",
					model : {},
					form : {
						onsubmit : function() {  
							// 调用接口
							var _data = _vm.model ;
							_data.token = app.data.user.token ;
							_vm.model.mobile = app.data.user.mobile ;
							app.service.user.m_change_password(_data, function(data) {
								view.m_reset_button('.submit') ;
								app.toast.m_show_text("保存成功") ;
								svc.m_back() ;
							}, function(err) {
								view.m_reset_button('.submit') ;
								app.toast.m_show_text(err.errorMessage) ;
							}) ;
						},
						oninvalid : function(errs) {
							view.m_reset_button('.submit') ;
						}
					}
				},
				methods : {
					m_reset : function() {
						this.model = {
							oldPassword : null,
							password : null,
							passwordConfirm : null,
							mobile : null
						}
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
			_vm.m_reset() ;
		}) ;

		view.m_on("enter", function() {
			/* 当 view 进入时触发 */	
		}) ;

		view.m_on("frozen", function() {
			/* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */	
		}) ;

		view.m_on("leave", function() {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
			_vm.m_reset() ;
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