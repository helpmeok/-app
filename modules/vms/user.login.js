define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		require('../styles/user.login.css');
		require('../../plugs/md5.min.js');
		var _vm = null;
		var _code = null;
		var _args = null;
		view.m_on("init", function () {
			_vm = view.m_vm({
				watch: {
					remember: function (v) {
						if (!v) {
							app.local.m_remove('account');
						}
					}
				},
				data: {
					title: "用户登陆",
					flag: 1,
					model: {
						tel: null,
						mobile: null,
						password: null
					},
					parentMobile: null,
					remember: 1,
					form: {
						onpassed: function () {

						}, 
						onsubmit: function () {
							_vm.model.phoneUUID = uuid();
							app.service.user.m_login(_vm.model, function (data) {
								var _user = data.memberLoginVo;
								app.local.m_set('user', _user); 
								view.m_reset_button('.submit');
								var _source = view.query.source;
								var _location = decodeURIComponent(view.query.location);
								var _prev_view_opts = svc.m_get_prev_view_opts();
								if (!_source && _prev_view_opts) {
									_source = _prev_view_opts.name;
								}
								svc.m_put_msg(_source, 'user.login', {
									location: _location,
									source: _source,
									code: _code,
									args: _args
								}); // 压入下拉
								svc.m_back(_location);
								if (_vm.remember) {
									app.local.m_set('account', _vm.model);
								} else {
									app.local.m_remove('account');
								}
								app.data.user = _user;
							}, function (err) {
								view.m_reset_button('.submit');
								app.modal.m_alert('提示', err.errorMessage);
							});
						},
						oninvalid: function () {
							view.m_reset_button('.submit');
						}
					}
				},
				methods: {
					m_weixin_login: function () {
						// app.toast.m_show_text('即将开放,敬请期待..');
						window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcafec248aa195a46&redirect_uri=http%3a%2f%2fwww.gmsweipai.com%2fgms.app%2f%23user.center&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect'
					},
					m_focus: function () { // 得到焦点
						// this.flag = 0 ;
					},
					m_blur: function () {
						// this.flag = 1 ;
					},
					m_findpwd: function () {
						svc.m_force_put_msg('user.findpwd', 'mobile', _vm.model.mobile);
						svc.m_push('user.findpwd');
					},
					m_push_regist: function () {
						if (!!_vm.parentMobile) {
							location.href = 'http://wap.gmsweipai.com/gms.app/regist/regist.html?parentMobile=' + parseInt(_vm.parentMobile);
						} else {
							location.href = 'http://wap.gmsweipai.com/gms.app/regist/regist.html'
						}
					}
				}
			});
		});
		view.m_on("draw", function () {
			/* 每当模板渲染时触发 */
			if (!!sessionStorage.getItem('parentMobile')) {
				_vm.parentMobile = sessionStorage.getItem('parentMobile')
			}
		});

		view.m_on("active", function () {
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */

		});

		view.m_on("enter", function () {
			/* 当 view 进入时触发 */
			var _account = app.local.m_get('account');
			if (_account) {
				_vm.model = _account;
			}
		});

		view.m_on("frozen", function () {
			/* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */
		});

		view.m_on("leave", function () {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */

		});
		view.m_on("message", function (ev, msg) {
			/* 当 view 进入后, 从消息队列中获取消息列表, 循环触发 */
			// ev 事件源
			// msg 消息对象 属性: name, params

			switch (msg.name) {
				case "mobile":
					{ // 监视消息名称
						_vm.model.mobile = msg.params;
						// ... 
						break;
					}
				case 'code':
					{
						_code = msg.params;
						break;
					}
				case 'args':
					{
						_args = msg.params;
						break;
					}
			}
		});
	}
});