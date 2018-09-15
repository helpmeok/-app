define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		var _vm = null ;
		var _dely = 60 ;
		require('../styles/user.reg.css') ;
		require('../../plugs/md5.min.js') ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "用户注册",
					model : {
						
					},
					src : window.__api + '/api/v2/rand/randImag?mchCode=888%' + Date.now(),
					wtext : _dely + 's',
					form : {
						onsubmit : function() { // 提交注册
							_vm.model.phoneUUID = uuid() ;
							if (app.session.m_get('parentMobile')) {
								_vm.model.parentMobile = app.session.m_get('parentMobile');
							}
							console.log(_vm.model)
							app.service.user.m_register(_vm.model, function(data) {
								app.modal.m_alert("提示", "注册成功！", function() {//成功时候回调
									//强行压入一条消息
									svc.m_force_put_msg("user.login", "mobile", _vm.model.mobile) ;
									//回退到user.login页面
									svc.m_back("user.login") ;
								}, "去登陆") ;
								view.m_reset_button('.submit') ;
							},function(err) {
								view.m_reset_button('.submit') ;
								app.modal.m_alert("提示", err.errorMessage) ;
							}) ;
						},
						oninvalid : function() { // 表单无效
							view.m_reset_button('.submit') ;
						}
					}
				},
				methods : {
					m_reset : function() {
						_vm.model = {
							mobile : '',
							name : '',
							id : '',
							nickname : '',
							password : '',
							passwordConfirm : '',
							smsCode : '',
							smsId : '',
							phoneUUID : '',
							type : '1',
							randCode : '',
							mchCode : '888' ,
						}
					},
					m_count_down : function() {
						var _timer = _dely ;
						var _ir = setInterval(function() {
							if(_timer != 0) {
								_timer -- ;
								_vm.wtext = _timer + 's' ;
							} else {
								_vm.wtext = _dely + 's' ;
								clearInterval(_ir) ;	
								view.m_reset_button('.req-code') ;
							}
						}, 1000) ;
					},
					m_req_code : function() {
						// 请求验证码
						if($$('.mobile').m_valid(true) && $$('.imgcode').m_valid(true)) {
							app.loader.m_show(30) ;
							app.service.user.m_get_reg_sms_code(this.model, function(data) {
								app.loader.m_hide() ;
								app.toast.m_show_ok('发送成功') ;
								_vm.m_count_down() ;
								_vm.model.smsId = data.smsId ;
							},function(err) {
								app.loader.m_hide() ;
								app.toast.m_show_text(err.errorMessage) ;
								view.m_reset_button('.req-code') ;
							}) ;
						} else {
							view.m_reset_button('.req-code') ;
						}
					},
					m_img_code : function() {
						_vm.src = window.__api + '/api/v2/rand/randImag?mchCode=888&'+ Date.now();
					},
				}
			}) ;
		}) ;
		view.m_on("draw", function() {
			/* 每当模板渲染时触发 */
			_vm.m_reset() ;
			_vm.m_img_code();
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

		view.m_on("leave.back", function() {
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