define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		var _vm = null;
		require('../../plugs/md5.min.js');
		require('../styles/user.setpaypwd.css');
		var _dely = 60;
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					title: "设置支付密码",
					model: {},
					wtext: _dely + 's',
					src: window.__api + '/api/v2/rand/randImag?mchCode=888&' + Date.now(),
					form: {
						onsubmit: function () {
							// 调用接口
							var _data = _vm.model;
							_data.token = app.data.user.token; // 设置用户 token
							console.log(_data)
							app.service.user.m_set_paypwd(_data, function (_data) {
								view.m_reset_button('.submit');
								app.toast.m_show_text("保存成功");
								var _user = app.data.user;
								_user.ifSetAmountPassWord = true;
								console.log(_user)
								app.local.m_set('user', _user)
								svc.m_back();
							}, function (err) {
								view.m_reset_button('.submit');
								app.toast.m_show_text(err.errorMessage);
							});
						},
						oninvalid: function (errs) { // 无效的时候
							view.m_reset_button('.submit');
						}
					}
				},
				methods: {
					m_count_down: function () {
						var _timer = _dely;
						var _ir = setInterval(function () {
							if (_timer != 0) {
								_timer--;
								_vm.wtext = _timer + 's';
							} else {
								_vm.wtext = _dely + 's';
								clearInterval(_ir);
								view.m_reset_button('.req-code');
							}
						}, 1000);
					},
					m_reset: function () {
						_vm.model = {
							mobile: '',
							operateId: '',
							name: '',
							id: '',
							nickname: '',
							password: '',
							passwordConfirm: '',
							smsCode: '',
							smsId: '',
							phoneUUID: '',
							type: '12',
							randCode: '',
							mchCode: '888',
						}
					},
					m_get_code: function () {
						if ($$('.mobile').m_valid(true) && $$('.imgcode').m_valid(true)) {
							app.loader.m_show(30);
							app.service.user.m_set_reg_sms_code(_vm.model, function (data) {
								app.loader.m_hide();
								app.toast.m_show_ok('发送成功');
								_vm.m_count_down();
								_vm.model.smsId = data.smsId;
							}, function (err) {
								app.loader.m_hide();
								app.modal.m_alert('提示', err.errorMessage);
								view.m_reset_button('.req-code');
							});
						} else {
							view.m_reset_button('.req-code');
						}
					},
					m_img_code: function () {
						_vm.src = window.__api + '/api/v2/rand/randImag?mchCode=888&' + Date.now();
					},
				}
			});
		});
		view.m_on("draw", function () {
			/* 每当模板渲染时触发 */
			_vm.model.mobile = app.data.user.mobile;
		});

		view.m_on("active", function () {
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */
			_vm.m_reset();
		});

		view.m_on("enter", function () {
			/* 当 view 进入时触发 */
		});

		view.m_on("frozen", function () {
			/* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */
		});

		view.m_on("leave.back", function () {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
			_vm.m_reset();
		});

		view.m_on("message", function (ev, msg) {
			/* 当 view 进入后, 从消息队列中获取消息列表, 循环触发 */
			// ev 事件源
			// msg 消息对象 属性: name, params
			switch (msg.name) {
				case "<name>":
					{ // 监视消息名称
						// ... 
						break;
					}
			}
		});
	}
});