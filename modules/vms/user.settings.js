define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		var _vm = null;
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					title: "设置",
					state: true,
					iswx: false
				},
				methods: {
					m_logout: function () { // 注销登陆
						var _e_submit = $$('.submit');
						view.m_reset_button('.submit');
						app.modal.m_confirm('提示', '是否确认注销登陆?', function () {
							_e_submit.get(0).m_submit();
							setTimeout(function () {
								app.local.m_remove('user');
								app.data.user = null;
								svc.m_put_msg('user.center', 'logout');
								svc.m_back_and_downpull();
								view.m_reset_button('.submit');
							}, 300);
						});
					}
				}
			});
		});
		view.m_on("draw", function () {
			if (_m_is_weixin()) {
				_vm.iswx = false
			} else {
				_vm.iswx = true
			}
			/* 每当模板渲染时触发 */
		});

		view.m_on("active", function () {
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */
		});

		view.m_on("enter", function () {
			/* 当 view 进入时触发 */
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
				case "<name>":
					{ // 监视消息名称
						// ... 
						break;
					}
			}
		});
	}
});