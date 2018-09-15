define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		require('../styles/user.packet.css');
		var _vm = null;
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					title: "我的红包",
					base_bg: app.data.__theme_bg_class,
					list: [],
					renders: {
						default: {
							model: {

							},
							ondraw: function () {
								return new Promise(function (next, fail) {
									app.service.user.m_redpacket({
										token: app.data.user.token
									}, function (data) {
										next(data);
									});
								});
							}
						}
					}
				},
				methods: {
					m_desc: function () {
						app.modal.m_alert('红包使用说明', '从2017年2月1日起，红包金额仅限于购买拍品时抵用货款使用（备注：如有退货情况，用于抵货款的该红包金额无法退还），古美术将不再受理红包提现，而从其他的金额提现不受影响。')
					},
					m_is_queryTicket: function () {
						app.service.user.m_is_queryTicket({
							token: app.data.user.token
						}, function (ds) {
							console.log(ds)
							for (var i = 0; i < ds.ticket.length; i++) {
								var el = ds.ticket[i];
								var s1 = new Date(parseInt(el.startValidity)).toLocaleString().split('午')[0];
								var s2 = new Date(parseInt(el.endValidity)).toLocaleString().split('午')[0];
								el.startValidity = new Date(parseInt(el.startValidity)).toLocaleString().split('午')[0].substring(0, s1.length - 1)
								el.endValidity = new Date(parseInt(el.endValidity)).toLocaleString().split('午')[0].substring(0, s2.length - 1)
							}
							_vm.list = ds.ticket ? ds.ticket : [];
						}, function (err) {
							console.log(err)
						})
					},
					m_alert: function () {
						app.modal.m_alert('优惠券使用说明', '优惠券500元仅限用于1万元及以上的。优惠券100元仅限用于抵扣1件单品。使用的期限:2018.01.09-2018.02.09。抵用券使用不能叠加。本活动最终解释权归厦门古美术电子商务有限公司。')
					}
				}
			});
		});
		view.m_on("draw", function () {
			/* 每当模板渲染时触发 */
			_vm.m_is_queryTicket();
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