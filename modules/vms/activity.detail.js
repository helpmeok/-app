define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		var _vm = null ;
		var _start_timer = null ;
		var _end_timer = null ;
		view.m_on("init", function() {
			require('../styles/activity.detail.css') ;
			_vm = view.m_vm({
				data : {
					title : "香皂",
					status : 0,
					src : null,
					price : 0,
					actionsheet : {
						params : {

						}
					},
					form : {
						model : {
							number : 1
						},
						onsubmit : function() {
							var _user = app.data.user ;
							if(null == _user) {
								_vm.m_login() ;
							} else {
								// 开始直接提交
								var _data = {
									token : _user.token,
									amount : _vm.form.model.number
								}
								transfer.onPay = function(status) {
									if(2 == status) {
										app.modal.m_alert('提示', '您已取消支付!') ;
									} else if(1 == status) { // 支付成功
										// 弹出效果
										app.modal.m_alert('提示', '购买成功') ;
										// 出效果
									}
								}
								app.service.activity.m_new_order(_data, function(ds) { // 下单成功
									view.m_reset_button('.submit') ;
									transfer.m_pay(ds.data.orderId) ; // 调取 iOS 支付
								}, function(err) {
									view.m_reset_button('.submit') ;
									app.modal.m_alert('提示', err.errorMessage) ; // 下单失败
								}) ;
							}
						},
						oninvalid : function() {
							view.m_reset_button('.submit') ;
						}
					}
				},
				computed : {
					total : function() {
						return this.price * this.form.model.number ;
					}
				},
				methods : {
					m_load : function() {
						_end_timer = Date.now() ;
						var _diff = (_end_timer - _start_timer)  ;
						if(_diff < 1000) {
							setTimeout(function() {
								_vm.status = 1 ;
							}, 1000) ;
						} else {
							_vm.status = 1 ;
						}
					},
					m_buy : function() {
						var _env = transfer.m_get_env() ;
						if(null != _env) {
							this.actionsheet.m_show() ;
						} else {
							app.modal.m_alert('提示', '请使用古美术APP打开') ;
						}
					},
					m_share : function() { // 分享链接
						app.vm.share.m_show({
							url : window.location.href,
							imgurl : 'http://cdn.youniupin.com/txz.jpg',
							title : '古美术檀香皂',
							desc : '火热抢购中！！'
						}) ;
					},
					m_login : function() {
						var _env = transfer.m_get_env() ;
						if(null != _env) {
							transfer.onUserToken = function(token) {
								app.service.user.m_get_by_token({
									token : token
								}, function(ds) {
									var _user = ds.data ;
									app.local.m_set('user', _user) ;
								}, function() {
									app.local.m_remove('user') ;
									next() ;
								}) ;
							}
							transfer.m_get_user_token() ; // 获取用户 token
						} else {
							svc.m_force_put_msg('user.login', 'code', 'neworder') ;
							svc.m_push('user.login?source={source}'.replace('{source}', view.opts.name)) ;
						}
					}
				}
			}) ;
		}) ;
		view.m_on("draw", function() {
			/* 每当模板渲染时触发 */
			_vm.status = 0 ;
			_vm.src = null ;

			app.service.activity.m_get(function(ds) {
	        	_vm.price = ds.data.price ;    
			}) ;

			Vue.nextTick(function() {
				_start_timer = Date.now() ;
				_vm.src = 'http://cdn.youniupin.com/activity.png' ;
			}) ;
		}) ;

		// 8 // 20 12

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
			var _code = msg.params.code ;
			switch(msg.name) {
				case "user.login" : { // 监视消息名称
					// ... 
					if('neworder' == _code) { // 再次提交
						_vm.m_submit() ;
					}
					break ;
				}
			}
		}) ;
	}
}) ;