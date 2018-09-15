define(function (require, exports, module) {
	function SepGlobal() {
		this.m_install = function (svc) {
			require('./components/download.app');
			Vue.component('sep-share', m_dev_component({
				props: {
					name: {
						type: String,
						default: 'share'
					}
				},
				mounted: function () { // 初始化
					// 引入
					this.m_ready();
					var _self = this;
					var _Clipboard = require('plugs/clipboard.min.js');
					var _e_copy_link = $(this.$el).find('.copy-link').get(0); // 拿到 DOM 对象
					var _clipboard = new _Clipboard(_e_copy_link);
					_clipboard.on('success', function () { // 复制成功
						_self.status = 1;
					});
					_clipboard.on('error', function () { // 复制错误
						_self.status = 0;
					});
				},
				data: function () {
					return {
						args: {
							url: null
						},
						status: null,
						share: {},
					}
				},
				template: heredoc(function () {
					/*
						<sep-actionsheet name = 'share' :scope_object = 'share'>
							<div class="modular counter-2">
								<ul>
									<li>
										<div :data-clipboard-text = 'args.url' v-click = 'm_copy_link' class="button copy-link">
											<i class="icon-share-linkfill fg-gray">
											</i>
											<small>
												复制链接
											</small>
										</div>
									</li>
									<li>
										<div v-click = 'm_share_weixin' class="button">
											<i class="icon-share-weixinfill fg-lightgreen">
											</i>
											<small>
												微信
											</small>
										</div>
									</li>
								</ul>
							</div>
						</sep-actionsheet>
					*/
				}),
				methods: {
					m_show: function (args) {
						if (null == transfer.m_get_env()) {
							this.args = args;
							this.share.m_show(); // 显示
						} else {
							transfer.m_share(args)
						}
					},
					m_hide: function () {
						this.share.m_hide(); // 隐藏
					},
					m_copy_link: function () { // 复制链接
						if (1 == this.status) {
							app.toast.m_show_ok('已复制');
							this.m_hide(); // 隐藏
						} else if (0 == this.status) {
							app.toast.m_show_no('复制失败');
							this.m_hide(); // 隐藏
						}
					},
					m_share_qq: function () { // 分享 QQ

					},
					m_share_weixin: function () { // 分享微信
						app.vm.weixin_share.m_show();
						this.m_hide(); // 隐藏
					}
				},
			}));

			Vue.component('sep-gesture', m_dev_component({
				props: {
					name: {
						type: String,
						default: 'gesture'
					}
				},
				mounted: function () { // 初始化
					this.m_ready();
				},
				data: function () {
					return {
						pop: {}
					}
				},
				methods: {
					m_show: function () {
						this.pop.m_show(); // 显示
					},
					m_hide: function () {
						this.pop.m_hide(); // 隐藏
					}
				},
				template: heredoc(function () {
					/*
						<sep-pop class = 'gesture' :scope_object = 'pop'>
							<img width = '100%' src = 'data:image/png;base64,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' />
							<em>
								侧滑可返回上一页哦
							</em>
							<a v-click = 'm_hide' class = 'button'>我知道了</a>
						</sep-pop>
					*/
				})
			}))

			// Vue.component('sep-redpackage', m_dev_component({
			// 	props : {
			// 		name : {
			// 			type : String,
			// 			default : 'redpackage'
			// 		},
			// 		title : {
			// 			type : String,
			// 			default : '恭喜您，获得一个红包'
			// 		},
			// 		desc : {
			// 			type : String,
			// 			default : '给您发了一个红包'
			// 		},
			// 		nickname : {
			// 			type : String,
			// 			default : '古美术'
			// 		},
			// 		headimgurl : {
			// 			type : String,
			// 			default : 'data:image/png;base64,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'
			// 		}
			// 	},
			// 	mounted : function() { // 初始化
			// 		this.m_ready() ;
			// 	},
			// 	data : function() {
			// 		var _self = this ;
			// 		return {
			// 			pop : {
			// 				params: {
			// 					onhide_after : function() {
			// 						if($.isFunction(_self.params.onfinish)) {
			// 							_self.params.onfinish() ;
			// 						}
			// 					}
			// 				}
			// 			},
			// 			params : {
			// 				onrob : function() {

			// 				},
			// 				onfinish : function() {

			// 				}
			// 			}
			// 		}
			// 	},
			// 	methods : {
			// 		m_hide : function() {
			// 			this.pop.m_hide() ;
			// 		},
			// 		m_close : function() {
			// 			if($.isFunction(this.params.onclose)) {
			// 				this.params.onclose.call(this) ;
			// 			}
			// 			this.m_hide() ;
			// 		},
			// 		m_show : function() {
			// 			this.pop.m_show() ;
			// 		},
			// 		m_rob : function() {
			// 			if($.isFunction(this.params.onrob)) {
			// 				this.params.onrob.call(this) ;
			// 			}
			// 			if($.isFunction(this.params.__onrob)) {
			// 				this.params.__onrob.call(this) ;
			// 			}
			// 			this.pop.m_hide() ;
			// 		}
			// 	},
			// 	template : heredoc(function() {
			// 		/*
			// 			<sep-pop width = '80%' top = '15%' height = '360px' class = 'redpackage' :scope_object = 'pop'>
			// 				<div class = 'top'>
			// 					<div class = 'headimgurl'>
			// 						<img :src = 'headimgurl' />
			// 					</div>
			// 					<p class = 'nickname'>
			// 						{{nickname}}
			// 					</p>
			// 					<p class = 'desc'>
			// 						{{desc}}
			// 					</p>
			// 					<em>
			// 						{{title}}
			// 					</em>
			// 				</div>
			// 				<div class = 'bottom'>
			// 					<a class = 'rob' v-click = 'm_rob'>開</a>
			// 					<div class = 'line'></div>
			// 				</div>
			// 				<a class = 'button icon-close close' v-click = 'm_close'></a>
			// 			</sep-pop>
			// 		 */
			// 	})
			// }))

			// Vue.component('sep-quickreg', m_dev_component({
			// 	props : {
			// 		name : {
			// 			type : String,
			// 			default : 'quickreg'
			// 		}
			// 	},
			// 	created : function() { // 初始化
			// 		this.m_ready() ;
			// 	},
			// 	data : function() {
			// 		var _vm = this ;
			// 		var _dely = 60 ;
			// 		return {
			// 			params : {
			// 				onfinish : function() { // 完毕

			// 				}
			// 			},
			// 			pop : {
			// 				params : {
			// 					onhide_after : function() {
			// 						if($.isFunction(_vm.params.onfinish)) {
			// 							_vm.params.onfinish() ;
			// 							_vm.params.onfinish = null ;
			// 						}
			// 					}
			// 				}
			// 			},
			// 			member_id : null,
			// 			self : this,
			// 			type : 0,
			// 			dely : _dely,
			// 			wtext : _dely + 's',
			// 			src : window.__api + '/api/v2/rand/randImag?mchCode=888&' + Date.now(),
			// 			model : {
			// 				mobile : null,
			// 				loginCode : null,
			// 				smsId : null,
			// 				password : null, // 密码
			// 				memberId : '0' ,

			// 				operateId : '',
			// 				name : '',
			// 				id : '',
			// 				nickname : '',
			// 				passwordConfirm : '',
			// 				smsCode : '',
			// 				phoneUUID : '',
			// 				type : '1',
			// 				randCode : '',
			// 				mchCode : '888' ,
			// 			},
			// 			form : {
			// 				onsubmit : function() {
			// 					// 提交注册
			// 					var req = app.m_query()
			// 					app.loader.m_show(60) ;
			// 					_vm.model.phoneUUID = uuid() ;
			// 					_vm.model.memberId = req.memberid ; // 设置推荐人ID
			// 					if(0 == _vm.type) {
			// 						app.service.user.m_quickreg(_vm.model, function(data) {
			// 							// 通过 token 登录
			// 							app.service.user.m_get_by_token({token : data.token}, function(ds) {
			// 								var _user = ds.data ;
			// 								app.data.user = _user ;
			// 								app.local.m_set('user', _user) ;
			// 								svc.curr_view.m_downpull() ; // 当前视图下拉
			// 								app.toast.m_show_ok('领取成功') ;
			// 								SepComponents.button.m_reset($('.global .quickreg .submit')) ;
			// 								_vm.pop.m_hide() ;
			// 								app.loader.m_hide() ;
			// 							}, function(err) {
			// 								app.modal.m_alert('提示', err.errorMessage) ;
			// 								SepComponents.button.m_reset($('.global .quickreg .submit')) ;
			// 								app.loader.m_hide() ;
			// 							}) ;
			// 						}, function(err) {
			// 							app.loader.m_hide() ;
			// 							app.modal.m_alert('提示', err.errorMessage) ;
			// 							SepComponents.button.m_reset($('.global .quickreg .submit')) ;
			// 						}) ;
			// 					} else if(1 == _vm.type) {
			// 						app.service.user.m_login(_vm.model, function(ds) {
			// 							var _user = ds.data ;
			// 							app.data.user = _user ;
			// 							app.local.m_set('user', _user) ;
			// 							svc.curr_view.m_downpull() ; // 当前视图下拉
			// 							app.toast.m_show_ok('登陆成功') ;
			// 							_vm.pop.m_hide() ;
			// 							app.loader.m_hide() ;
			// 						}, function(err) {
			// 							app.loader.m_hide() ;
			// 							app.modal.m_alert('提示', err.errorMessage) ;
			// 							SepComponents.button.m_reset($('.global .quickreg .submit')) ;
			// 						}) ;
			// 					}
			// 				},
			// 				oninvalid : function() {
			// 					SepComponents.button.m_reset($('.global .quickreg .submit')) ;
			// 				}
			// 			}
			// 		}
			// 	},
			// 	methods : {
			// 		m_set_member_id : function(member_id) {
			// 			this.member_id = member_id ;
			// 			return this ;
			// 		},
			// 		m_show : function() {
			// 			this.pop.m_show() ;
			// 		},
			// 		m_hide : function() {
			// 			this.pop.m_hide() ;
			// 		},
			// 		m_check_tel : function() { // 检查手机号
			// 			var _e_imgcode = $('.global .imgcode') ;
			// 			var _e_mobile = $('.global .mobile') ;
			// 			if(_e_imgcode.m_valid(true)&&_e_mobile.m_valid(true)) {
			// 				var _self = this ;
			// 				app.service.tel.m_exist({
			// 					mobile : this.model.mobile
			// 				}, function(ds) {
			// 					if(1 == ds.data) { // 如果存在
			// 						_self.type = 1 ;
			// 						app.toast.m_show_text('您已经注册, 已为您切换快速登陆') ;
			// 					} else if(0 == ds.data) { // 如果不存在
			// 						_self.type = 0 ;
			// 					}
			// 				}, function(err) {
			// 					app.modal.m_alert('提示', err.errorMessage) ;
			// 				}) ;
			// 			}

			// 		},
			// 		m_count_down : function() {
			// 			var _dely = this.dely ;
			// 			var _timer = _dely ;
			// 			var _vm = this ;
			// 			var _ir = setInterval(function() {
			// 				if(_timer != 0) {
			// 					_timer -- ;
			// 					_vm.wtext = _timer + 's' ;
			// 				} else {
			// 					_vm.wtext = _dely + 's' ;
			// 					clearInterval(_ir) ;	
			// 					SepComponents.button.m_reset($('.global .quickreg .req-code')) ;
			// 				}
			// 			}, 1000) ;
			// 		},
			// 		m_req_code : function() { // 发送验证码
			// 			var _e_imgcode = $('.global .imgcode') ;
			// 			var _e_mobile = $('.global .mobile') ;
			// 			var _vm = this ;
			// 			if(_e_imgcode.m_valid(true) && _e_mobile.m_valid(true)) {
			// 				// 请求接口
			// 				console.log('提交参数。。', _vm.model) ;
			// 				app.service.user.m_get_reg_sms_code(_vm.model, function(data) {

			// 					console.log(data) ;

			// 					app.toast.m_show_ok('发送成功') ;
			// 					_vm.model.smsId = data.smsId ;
			// 					_vm.m_count_down()
			// 				},function(err) {

			// 					console.log(err) ;

			// 					app.modal.m_alert('提示', err.errorMessage) ;
			// 					SepComponents.button.m_reset($('.global .quickreg .req-code')) ;
			// 				}) ;
			// 			} else {
			// 				SepComponents.button.m_reset($('.global .quickreg .req-code')) ;
			// 			}
			// 		},
			// 		m_img_code : function() {
			// 			this.src = window.__api + '/api/v2/rand/randImag?mchCode=888&'+ Date.now();
			// 		} ,
			// 	},
			// 	template : heredoc(function() {
			// 		/*
			// 			<form v-form = 'form'>
			// 				<sep-pop  :modal = 'true' :scope_object = 'pop'>
			// 					<div class = 'quickreg'>
			// 						<div class = 'window'>
			// 	                        <div class = 'wrap'>
			// 	                            <div class="tab red">
			// 									<div class="wrap">
			// 										<div class="button">
			// 											<input type="radio" name="radio" v-model = 'type' value = '0'>
			// 											<div class="item">
			// 												<small>
			// 													快速注册
			// 												</small>
			// 											</div>
			// 										</div>
			// 										<div class="button">
			// 											<input type="radio" name="radio" v-model = 'type' value = '1'>
			// 											<div class="item">
			// 												<small>
			// 													快速登陆
			// 												</small>
			// 											</div>
			// 										</div>
			// 									</div>
			// 								</div>
			// 	                            <div class = 'content'>
			// 	                               <div class="layout">
			// 										<ul>
			// 											<li>
			// 												<div class="item field" v-if = '0 == type'>
			// 													<div class="content">
			// 														<div class="edit">
			// 															<input class = 'imgcode' v-rules = '{required : true}' data-required-msg = '请输入计算结果' data-tel-msg = '计算结果错误' type="tel" placeholder="请输入计算结果" v-model = 'model.randCode'>
			// 														</div>
			// 													</div>
			// 													<div class="other" >
			// 														<div class="but">
			// 														    <img :src = 'src' alt="" v-click = 'm_img_code'/>
			// 														</div>
			// 													</div>
			// 												</div>
			// 												<div class="item field">
			// 													<div class="content">
			// 														<div class="edit">
			// 															<input @blur = 'm_check_tel' class = 'mobile' v-rules = '{required : true, tel : true}' data-required-msg = '请输入手机号' data-tel-msg = '手机号格式无效' type="tel" placeholder="您的手机号" v-model = 'model.mobile'>
			// 														</div>
			// 													</div>
			// 													<div class="other" v-if = '0 == type'>
			// 														<sep-button :loading = 'false' text = '发送验证码' :wtext = 'wtext' v-click = 'm_req_code' class="lightyellow medium mini button req-code"></sep-button>
			// 													</div>
			// 												</div>
			// 												<div class="item field">
			// 													<div class="content">
			// 														<div class="edit">
			// 															<input class = 'mobile' v-rules = '{required : true}' data-required-msg = '请输入密码' type="password" placeholder="设置密码" v-model = 'model.password'>
			// 														</div>
			// 													</div>
			// 												</div>
			// 												<div class="item field" v-if = '0 == type'>
			// 													<div class="content">
			// 														<div class="edit">
			// 															<input maxlength = '6' v-rules = '{required : true, minlength : 6}' data-minlength-msg = '验证码为6位数字' data-required-msg = '请输入验证码' type="tel" placeholder="请输入验证码" v-model='model.loginCode'>
			// 														</div>
			// 													</div>
			// 													<div class="other"></div>
			// 												</div>
			// 											</li>
			// 										</ul>
			// 									</div>
			// 									<div class = 'padding-far'>
			// 										<sep-button v-if = '0 == type' v-click = 'form.m_submit' text = '确认注册' wtext = '注册中..' class = 'submit default red border-radius-far'></sep-button>
			// 										<sep-button v-if = '1 == type' v-click = 'form.m_submit' text = '确认登陆' wtext = '登陆中..' class = 'submit default red border-radius-far'></sep-button>
			// 									</div>
			// 	                            </div>
			// 	                            <a v-click = 'm_hide' class = 'close icon-close'></a>
			// 	                        </div>
			// 	                    </div>
			// 					</div>
			// 				</sep-pop>
			// 			</form>
			// 		*/
			// 	})
			// })) ;

			Vue.component('sep-weixin-share', m_dev_component({
				props: {
					name: {
						type: String,
						default: 'weixin_share'
					}
				},
				methods: {
					m_hide: function () {
						this.pop.m_hide();
					},
					m_show: function () {
						this.pop.m_show();
					},
				},
				created: function () { // 初始化
					this.m_ready();
				},
				data: function () {
					return {
						pop: {}
					}
				},
				template: heredoc(function () {
					/*
						<sep-pop top = '0' left = 'auto' right='30px' name='weixin-share' :scope_object = 'pop'>
							<img v-click = 'm_hide' width="100%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAU2CAMAAAD9CcM0AAAC+lBMVEUAAAD////////////////////////////////////////////////////////////////////////////////+/v7///////////8FAAH///////////////////8FAAEFAAEFAAEFAQEFAAEFAAH////6+vr////+/v4FAAH///////////////////////////8FAQH///////////////////8PDA0FAAEGAQIJBgYFAAH///8FAAEFAAEFAAEFAAEFAQIFAQEFAAH///8FAAEFAAEFAAH///8FAQL///8FAAEFAAH///8FAAH///////////8FAQL////////////////My8vHxcXV1NTKycnKycl8eXr///9KXmdicGtJR0wFAAFpd3JNYGlsenVPY2tmdG+BjopMSk9idHtwfnlVaHBufHd9ioV6iINzgHtKSE1/jIdZbHRfXWJdcHd0gn1neH9dW19vgIZtfoRXanJlc25PTFFYVltkYmZjcWxfcnl9jZFkdn1VU1dxgohrfIJ7eXx0hYp3iI1mZGhpeoGJlpJ2hH9bbnZaWF2Lio1kcm2Pm5eEkYyDk5ZSZm5oZmpQTlOSnppST1VqaW1hYGR/j5N2dXh4d3pzcnVxcHR9e392houFko2Bf4KIlZB6io6DgYSFg4Z7i5Bsa26Wop2LmJOHhYh5hoF3hYCJh4qOmpWBkZWRnZlTUVZRZW2Xo5+RkJNXVVlTZ2+TkpWUoJyOnJ+ZpaGImJuVlJaenZ91c3eKmZx/foFwb3KHlI+Gk46XlplvbXFubHCNmZWMm52ZmJubp6KNjI+PjpGbmp2FlJiGlZiHlpmQnqGRn6EKBgd+fYCOjY+Qj5EPDA4cGxwWFBVqcG37+/soKCkiISMwMjTt7u48PD4rLS7n6en3+PhCQ0Xy8/PX2to3Nzjg4uI9SlDKzMxUXV3BxsZPV1XO0tIzPUJZY2FfamhFVl5JUU+6v7+ssrSmp6ibpqu0treora+xur6hoKPol1wIAAAAXXRSTlMAQMCAMRAg8HdEYLug0eBPcLCQ/e4R3WbMq1QEh5n58CJHEfjhqgzYJtH2HTkIx+m3LxgUK/OmA8IbCZp82X+L6aNeU+R2bLdaOnTKko1krZOKKZ1C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M9BubwBU6aI0A9wA0G1AJ6PeBUgZX+iu1BwOmFwKJ8z7nyLgqI5om34eAGHOts5dHzNgBnwe7lB7eDNgEh//xSrZx3eg8vN9N9OA2YSER+35s/nUtz4D+I//h5Nfl9AMgEI9WeVy0tIfds5gt5UQhqIsEDLyFhgUDcv5rPv/v/GqMFYnDcM4bSO9Sj67RFGiJBdzbWySP5M7hYPoaCJ3gPRydwA/+FWS2t6ArLXuT5/vlXOE63RzoVTaLT9nzW0sdxQgfc0MmDeiPHg1S7m+hQU2of2reMquAA+uuQe3klU1kUkUBPil6E4i5t6S7gsAfz1WWpgpX2aq2rnEeTo5Xv/xzll9kYrEcWJee8UlgeeDV4EBwNT+Bhg4enGWnkPt/HL8qdwjRUkhj7Y5b6c+ex8krcqDloQ66DOfECuwxE5WbBxzX9cAJMqaFlF85tS9GpsnE4Z2yPRTud8AErvQzmoXQusZ2rXIGIiT7DIB9VAIqUhBd50YA0oj3jQXWqzMVb17hTUh6uRO/X28okWUcTuMvMgyGRFg1/T9WO5NNnE/7mYNy0vvq5N7wx3xw57CC5+gYPkM6dPzV4yJw5PaPb+PwHIl9wSsCaBHyzgnVAAtnQs+wlpmvsWGNLhQyafRvl9AT5XGXMcllFUldxFPhyk6PdDJnWQNxw1ol1V3GRyhncH6SRJ4DyJfJnInl6kFp+sRk18/eZepC35Y+7fo/i08+cMOublTvcufS2BpuJEn57aWgTi/fhKojJ3aej7X8cNp/e7dAdAHG3+wuVNuYEmHtRExTgXZ+yWzfPmrQ4Dg3ZHIuDplXtJeidwFz+bd34Fs+/KgDG8IkupjAfzERRKw0Z0CNOrUsSiI7ikr44mkNR2qq06x/MbFZ2ttouAMtNfOvNp1wWWRJFUEn5zxBughk1uYhgH7BhQpwk3mjiLGTJz5QPI8GdcXCjOTU+CzUyAVKhW761lZu3Pg+ljsS96UyUz6W4iJFMtBMq0gZZw0jlYVAxJdi/JGQvSnN9jshsa73yYzc9XLXdDKnTbKbk6xPpn/glD4rkfu8m6gWW9ejl/5E3Yz4pW2+AohbX/h2xnGA7lVVCanw9/3GHMbhmEYhmEYhmEYhmEYhmEYhmEYxj/24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVXYgwMBAAAAACD/10ZQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXYgwMBAAAAACD/10ZQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRX24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYU9OBAAAAAAAPJ/bQRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWkPDgQAAAAABPlbLzBCBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAsSx48M6QV6QQAAAABJRU5ErkJggg==">
						</sep-pop>
					 */
				})
			}))

		}
	}


	module.exports = SepGlobal;
});