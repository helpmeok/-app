define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		var _vm = null;
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					title: "我的资料",
					user: {},
					renders: {
						default: {
							model: {

							},
							ondraw: function () {
								return new Promise(function (next, fail) {
									_vm.user = app.data.user
									app.service.user.m_userdetail({
										token: app.data.user.token,
										phoneUUID: uuid()
									}, function (data) {
										next(data);
									}, fail);
								})
							}
						}
					},
					form: {
						onsubmit: function (data) {
							// 调用接口
							data.token = app.data.user.token;
							data.sex = data.sexType;
							app.service.user.m_personinfo_save(data, function (data) {
								var _user = app.data.user;
								_user.portraitUrl = data.portraitUrl;
								_user.memberName = data.memberName;
								_user.nickname = data.nickname;
								view.m_reset_button('.submit');
								app.toast.m_show_text("保存成功");
								svc.m_put_msg("user.center", 'save');
								svc.m_push('user.center');
							}, function (err) {
								view.m_reset_button('.submit');
								app.toast.m_show_text("保存失败");
							});
						},
						oninvalid: function (errs) {

						}
					}
				},
				methods: {

				}
			});
		});
		view.m_on("draw", function () {
			/* 每当模板渲染时触发 */

			return _vm.m_refresh();
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