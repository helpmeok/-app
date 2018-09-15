define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		var _vm = null ;
		var _dely = 60 ;
		require('../styles/user.findpwd.css') ;
		require('../../plugs/md5.min.js') ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "找回密码",
					model : {},
					wtext : _dely + 's',
					src : window.__api + '/api/v2/rand/randImag?mchCode=888&' + Date.now(),
					form : {
						onsubmit : function() {  
							// 调用接口
							var _data = _vm.model ;
							_data.phoneUUID = uuid() ;
							_vm.m_step2(_data).then(function(data) {
								return _vm.m_step3(data) ;
							}).then(function() {
								// ok
								view.m_reset_button('.submit') ;
								app.modal.m_alert('提示', '密码修改成功!', function() {
									svc.m_force_put_msg('user.login', 'mobile', _vm.model.mobile) ;
									svc.m_back('user.login') ;
								}) ;
							}).catch(function(err) {
								view.m_reset_button('.submit') ;
								app.modal.m_alert('提示', err.errorMessage) ;
							}) ;
						},
						oninvalid : function(errs) {
							view.m_reset_button('.submit') ;
						}
					}
				},
				methods : {
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
					m_step1 : function() { // 获取验证码
						return new Promise(function() {
							var _e_mobile = $$('.mobile') ;
							if(_e_mobile.m_valid(true)) {
								app.loader.m_show(30) ;

								console.log('提交的参数', _vm.model) ;



								app.service.user.m_get_find_sms_code(_vm.model, function(data) {
									app.toast.m_show_ok('发送成功!') ;
									app.loader.m_hide() ;
									_vm.m_count_down() ;
									_vm.model.smsId = data.smsId ; // 短信 id
								}, function(err) {

									console.log('错误' , err) ;


									app.loader.m_hide() ;
									app.modal.m_alert('提示', err.errorMessage) ;
									view.m_reset_button('.req-code') ;
								}) ;
							} else {
								view.m_reset_button('.req-code') ;
							}
						}) ;
					},
					m_step2 : function(data) {
						return new Promise(function(next, fail) {
							app.service.user.m_findpwd_one(data, function(data) {
								_vm.model.operateId = data.operateId ;
								next(_vm.model) ;
							}, fail) ;
						}) ;
					},
					m_step3 : function(data) { // 完成
						console.log(data) ;
						return new Promise(function(next, fail) {
							app.service.user.m_findpwd_two(data, function(data) {
								next(data) ;
							}, function(err) {
								fail(err) ;
							}) ;
						}) ;
					},
					m_reset : function() {
						_vm.model = {
							mobile : '',
							operateId : '',
							name : '',
							id : '',
							nickname : '',
							password : '',
							passwordConfirm : '',
							smsCode : '',
							smsId : '',
							phoneUUID : '',
							type : '2',
							randCode : '',
							mchCode : '888' ,
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
				case "mobile" : { // 监视消息名称
					// ... 
					_vm.model.mobile = msg.params ;
					break ;
				}
			}
		}) ;
	}
}) ;