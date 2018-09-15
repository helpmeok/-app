define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		var _vm = null;
		require('../styles/user.money.css');
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					title: "账户余额",
					ensurePrice: '2000.00',
					disabled_in: null,
					disabled_out: null,
					charge: {},
					renders: {
						default: {
							model: {
								amount: {
									allAmounts: 0,
									freezeAmount: 0,
									balance: 0
								}
							},
							ondraw: function () {
								return new Promise(function (next, fail) {
									app.service.user.m_account_balance({
										token: app.data.user.token
									}, function (data) {
										data.amount = JSON.parse(data.amount);
										_vm.ensurePrice = data.amount.ensurePrice;
										_vm.disabled_in = parseInt(data.amount.ensurePrice) == 0 ? false : true;
										_vm.disabled_out = parseInt(data.amount.ensurePrice) == 0 ? true : false;
										next(data);
									}, fail);
								});
							}
						}
					}
				},
				methods: {
					m_push_ensurePrice: function () {
						if (!_vm.disabled_in) {
							app.modal.m_confirm('提示', '确定要从余额转入保证金2000元吗?', function () {
								app.service.user.m_push_ensurePrice({
									ensurePrice: 2000,
									type: md5('2017' + app.data.user.token),
									token: app.data.user.token
								}, function (ds) {
									_vm.disabled_in = true;
									_vm.disabled_out = false;
									_vm.ensurePrice = '2000.00';
									_vm.m_get_info();
								}, function (err) {
									console.log(err)
									app.modal.m_alert('提示', err.errorMessage, function () {

									})
								})
							})

						}
					},
					m_pull_ensurePrice: function () {
						if (!_vm.disabled_out) {
							app.modal.m_confirm('提示', '确定要将保证金转入到余额吗?', function () {
								app.service.user.m_pull_ensurePrice({
									ensurePrice: 2000,
									type: md5('2017' + app.data.user.token),
									token: app.data.user.token
								}, function (ds) {
									_vm.disabled_in = false;
									_vm.disabled_out = true;
									_vm.ensurePrice = '0.00';
									_vm.m_get_info();
								}, function (err) {
									app.modal.m_alert('提示', err.errorMessage, function () {

									})
								})
							})
						}
					},
					m_get_info: function () {
						app.service.user.m_account_balance({
							token: app.data.user.token
						}, function (data) {
							data.amount = JSON.parse(data.amount);
							console.log(data.amount)
							_vm.renders.default.model.amount = data.amount;
						}, function (err) {
							app.toast.m_show_no(err)
						});
					},
					m_back: function () {
						var url = location.href;
						console.log(url)
						if (url.indexOf('s=1') == -1) { //判断是不是从专场进来
							svc.m_redirect('user.center');
						} else {
							svc.m_push('$root')
						}
					}
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