define(function(require, exports, module) {
	module.exports = function(view, view, stc, svc) {
		require('../styles/seckill.detail.css') ;
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "藏品详情",
					status : 0,
					swiper : {},
					window : {
						params : {
							e_input : null,
							onhide_after : function() {
								_vm.captcha = null ;
							},
							onready : function() {
								this.params.e_input = $$('.input-captcha') ;
							},
							onshow_after : function() {
								var _e_input = this.params.e_input ;
								setTimeout(function() {
									_e_input.focus() ;
								}, 300) ;
							}
						}
						
					},
					base64_captcha : null,
					captcha : null,
					access_type : null,
					url : null,
					pop : {},
					form : {
						onsubmit : function() { // 提交验证码
							_vm.m_rob() ;
						},
						oninvalid : function() {
							view.m_reset_button('.submit') ;
						}
					},
					renders : {
						default : {
							model : {
								
							},
							ondraw : function() {
								return new Promise(function(next, fail) {
									var _id = view.query.id ;
									var _collection_id = view.query.collection_id ;
									app.service.seckill.m_detail({
										id : _id,
										collection_id : _collection_id
									}, function(ds) {
										next(ds.data) ;
									}, fail) ;
								}) ;
							}
						}
					}
				},
				methods : {
					m_photo_browse : function() { // 图片浏览器
						app.session.m_set('photo.browse.list', this.$model.images) ;
						app.session.m_set('photo.browse.index', this.swiper.m_get_index()) ;
						svc.m_push('photo.browse') ;
					},
					m_share : function() {
						app.vm.share.m_show({
							title : this.$model.name,
							url : this.url,
							imgurl : this.$model.image,
							desc : this.$model.description
						}) ;
					},
					m_refresh_captcha : function() {
						var _user = app.data.user ;
						var _id = view.query.id ;
						var _collection_id = view.query.collection_id ;
						if(_user) {
							app.loader.m_show(60) ;
							app.service.seckill.m_captcha({
								id : _id,
								collection_id : _collection_id,
								token : _user.token,
							}, function(data) {
								// 弹出验证码
								app.loader.m_hide() ;
								_vm.base64_captcha = data.data ;
								$$('.input-captcha').val('').focus() ; // 清除
								_vm.window.m_show() ;
							}, function(err) {
								app.modal.m_alert('提示', err.errorMessage) ;
							}) ;
						} else {
							var _env = transfer.m_get_env()  ;
							if(null != _env) {
								transfer.m_login() ;
							} else {
								svc.m_push('user.login') ;	
							}
						}
					},
					m_transfer_close : function() { // 原生返回
						transfer.m_close() ;
					},
					m_rob : function() {
						var _user = app.data.user ;
						var _id = view.query.id ;
						var _collection_id = view.query.collection_id ;
						transfer.onPay = function(status) {
							if(2 == status) {
								app.modal.m_alert('提示', '您已取消支付!') ;
							} else if(1 == status) { // 支付成功
								// 弹出效果
								_vm.pop.m_show() ; // 弹出出价成功界面
								// 出效果
							}
						}
						app.service.seckill.m_rob({
							id : _id,
							captcha : _vm.captcha,
							collection_id : _collection_id,
							token : _user.token,
						}, function(ds) {
							// 开始调用 iOS or Android natibe code
							_vm.$model.state = 3 ;
							_vm.captcha = null ; // 清楚验证码
							_vm.window.m_hide() ;
							view.m_reset_button('.submit') ;
							var _orderid = ds.data.id ;
							transfer.m_pay(_orderid) ; // 调取 iOS 支付
						}, function(err) {
							view.m_reset_button('.submit') ;
							app.modal.m_alert('提示', err.errorMessage) ;
						}) ;
						
					}
				}
			}) ;
		}) ;
		view.m_on("draw", function() {
			/* 每当模板渲染时触发 */
			_vm.url = window.location.href ;
			return _vm.m_refresh() ;
		}) ;

		view.m_on("active", function() {
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */	
			var _caller = view.query.caller ;
			if('transfer' == _caller) {
				_vm.access_type = 1 ;
			} else {
				_vm.access_type = 0 ;
			}
		}) ;

		view.m_on("enter", function() {
			/* 当 view 进入时触发 */	

		}) ;

		view.m_on("frozen", function() {
			/* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */	
		}) ;

		view.m_on("leave", function() {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
			// 离开处理
			_vm.pop.m_hide() ;
			_vm.window.m_hide() ;
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