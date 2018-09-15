define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		var _vm = null;
		require('../../plugs/md5.min.js');
		require('../styles/order.confirm.css');
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					title: "确认订单",
					tip_status: 1,
					address: null,
					base_fg: app.data.__theme_fg_class,
					tab_index: 1,
					status: 1,
					orderId: '',
					screeningId: '',
					postage: 0, //运费
					priceDown: 0, //优惠金额
					totalAmounts: 0, //可用抵扣金额
					redPacket: false, //可用抵扣按钮
					postpone: false, //是否显示过期时间，多件不显示
					outConfirmTime: null, //过期时间
					tickets: [], //优惠券
					totalCharge: 0, //总价
					signCharge: 0, //标记总价
					balance: 0,
					amountPass: "",
					ticketId: '',
					ispay: false,
					payRecordsId: "",
					ispaysubmit: true, //防止点击多次生成多个订单
					renders: {
						default: {
							model: {
								collectionVos: {

								}
							},
							ondraw: function () {
								var _orderids = view.query.id;
								return new Promise(function (next, fail) {
									app.service.order.m_get_redPacket({ //获取可用抵扣
										token: app.data.user.token,
									}, function (data) {
										console.log(data)
										if (data.totalAmounts >= 100) {
											_vm.totalAmounts = 100
										} else {
											_vm.totalAmounts = 0
										}
									}, function (err) {
										app.toast.m_show_text(err.errorMessage);
									})
									app.service.order.m_get({ //获取订单详细信息
										token: app.data.user.token,
										orderIds: _orderids
									}, function (data) {
										console.log(data)
										_vm.orderId = data.orderVos.id;
										_vm.status = 1;
										var _choose_address = app.session.m_get("address");
										if (_choose_address) {
											_vm.address = _choose_address;
										} else {
											_vm.address = data.addressVo;
										}
										app.session.m_set('address', _vm.address);
										_vm.postage = 0;
										_vm.priceDown = 0;
										_vm.totalCharge = 0;
										_vm.redPacket = false;
										data.orderVos.forEach(function (item) {
											item.isPriceDown = Number(item.priceDown) == 0 ? 0 : 1
											item.downPrice = Number(item.bidPrice) - Number(item.priceDown)
											_vm.postage += Number(item.postage)
											_vm.priceDown += Number(item.priceDown)
											_vm.totalCharge += Number(item.charge)
										});
										setTimeout(function () {
											_vm.totalCharge = _vm.totalCharge + _vm.postage - _vm.priceDown;
											_vm.signCharge = _vm.totalCharge
										}, 200);
										data.tickets.forEach(function (item) {
											item.checked = false
										})
										_vm.tickets = data.tickets;
										if (data.orderVos.length > 1) {
											_vm.postpone = false
										} else {
											_vm.outConfirmTime = new Date(parseInt(data.orderVos[0].outConfirmTime)).toLocaleString().replace(/:\d{1,2}$/, ' ');
											_vm.postpone = true
										}
										next(data);
									}, function (err) {
										console.log(err)
										app.toast.m_show_text(err.errorMessage);
										_vm.status = 0;
										fail(err);
									});
								});
							}
						}
					}
				},
				watch: {
					redPacket: function (val) {
						if (val) {
							_vm.totalCharge -= 100
							_vm.signCharge -= 100
						} else {
							_vm.totalCharge += 100
							_vm.signCharge += 100
						}
					}
				},
				methods: {
					m_close_tip: function () {
						this.tip_status = 0;
					},
					m_pay: function () {
						var _addressId = app.session.m_get('address') ? app.session.m_get('address').addressId : "";
						app.service.order.m_isverify({
							token: app.data.user.token
						}, function (data) {
							if (data.result) {
								if (!!_addressId) {
									app.loader.m_show();
									app.service.order.m_create_order({
										token: app.data.user.token,
										ticketId: _vm.ticketId,
										orderIds: view.query.id,
										addressId: _addressId,
										sendType: 1,
										redPacketDeduction: _vm.redPacket ? 100 : 0
									}, function (_data) {
										console.log(_data)
										_vm.balance = _data.balance;
										_vm.payRecordsId = _data.payRecordsId;
										app.loader.m_hide();
										_vm.ispay = true;
									}, function (_err) {
										app.toast.m_show_text(_err.errorMessage);
									})
								} else {
									app.loader.m_hide();
									app.toast.m_show_text('请填写收货地址');
								}
							}
						}, function (err) {
							app.toast.m_show_text(err.errorMessage);
						})
					},
					m_get_ticket: function (el) {
						if (!el.checked) {
							_vm.tickets.forEach(function (item) {
								item.checked = false
							})
							setTimeout(function () {
								_vm.tickets[el.index].checked = true;
							}, 0);
							_vm.totalCharge = _vm.signCharge - _vm.tickets[el.index].money
							_vm.ticketId = _vm.tickets[el.index].id
						} else {
							_vm.totalCharge = _vm.signCharge
							_vm.ticketId = '';
						}
					},
					m_show: function (e) {
						if (e.srcElement.className == 'paymask') {
							app.modal.m_confirm('温馨提示', '确定要放弃支付吗？', function () {
								_vm.ispay = false
							}, function () {

							})
						} else if (e.srcElement.className == "balance_pay") { //余额支付
							if (_vm.ispaysubmit) {
								_vm.ispaysubmit = false
								app.loader.m_show();
								app.service.order.m_balance_pay({
									token: app.data.user.token,
									payRecordsId: _vm.payRecordsId,
									amountPass: md5(md5(_vm.amountPass) + app.data.user.mobile)
								}, function (data) {
									app.toast.m_show_text("支付成功");
									svc.m_force_put_msg('user.center', 'save')
									svc.m_push('user.center')
									app.loader.m_hide();
								}, function (_err) {
									_vm.ispaysubmit = true
									console.log(_err)
									app.loader.m_hide();
									app.toast.m_show_text(_err.errorMessage);
								})
							}
						} else if (e.srcElement.className == "wx_pay") { //微信支付
							if (_vm.ispaysubmit) {
								_vm.ispaysubmit = false
								app.service.order.m_wx_pay({
									token: app.data.user.token,
									payRecordsId: _vm.payRecordsId
								}, function (_data) {
									_data = {
										"appId": _data.appId,
										"nonceStr": _data.nonceStr,
										"package": _data.packageABC,
										"paySign": _data.paySign,
										"signType": _data.signType,
										"timeStamp": _data.timeStamp
									}
									app.wxchat.m_pay(_data, function () {
										app.toast.m_show_text("取消支付");
										_vm.ispaysubmit = true
									}, function () {
										app.toast.m_show_text("支付失败");
										_vm.ispaysubmit = true
									}, function () {
										app.toast.m_show_text("支付成功");
										svc.m_force_put_msg('user.center', 'save')
										svc.m_push('user.center')
									})
								}, function (err) {
									console.log(_err)
									_vm.ispaysubmit = true
									app.toast.m_show_text(_err.errorMessage);
								})
								// app.service.order.m_wx_pay({
								// 	token: app.data.user.token,
								// 	payRecordsId: _vm.payRecordsId
								// }, function (_data) {
								// 	_data = {
								// 		"appId": _data.appId,
								// 		"nonceStr": _data.nonceStr,
								// 		"package": _data.packageABC,
								// 		"paySign": _data.paySign,
								// 		"signType": _data.signType,
								// 		"timeStamp": _data.timeStamp
								// 	}
								// 	if (typeof WeixinJSBridge == "undefined") {
								// 		if (document.addEventListener) {
								// 			document.addEventListener('WeixinJSBridgeReady',
								// 				onBridgeReady(_data), false);
								// 		} else if (document.attachEvent) {
								// 			document.attachEvent('WeixinJSBridgeReady', onBridgeReady(_data));
								// 			document
								// 				.attachEvent('onWeixinJSBridgeReady', onBridgeReady(_data));
								// 		}
								// 	} else {
								// 		onBridgeReady(_data);
								// 	}

								// 	function onBridgeReady(wx_data) {
								// 		WeixinJSBridge
								// 			.invoke(
								// 				'getBrandWCPayRequest', wx_data,
								// 				function (res) {
								// 					if (res.err_msg == "get_brand_wcpay_request:cancel")
								// 						app.toast.m_show_text("取消支付");
								// 					_vm.ispaysubmit = true
								// 					if (res.err_msg == "get_brand_wcpay_request:fail")
								// 						app.toast.m_show_text("支付失败");
								// 					_vm.ispaysubmit = true
								// 					if (res.err_msg == "get_brand_wcpay_request:ok") {
								// 						app.toast.m_show_text("支付成功");
								// 						svc.m_force_put_msg('user.center', 'save')
								// 						svc.m_push('user.center')
								// 					}
								// 				});
								// 	}
								// }, function (_err) {
								// 	console.log(_err)
								// 	_vm.ispaysubmit = true
								// 	app.toast.m_show_text(_err.errorMessage);
								// })
							}
						}
					}
				},
				created: function () {
					//初始化修改值
				}
			});
		});
		view.m_on("draw", function () {
			/* 每当模板渲染时触发 */
			return _vm.m_refresh();
		});

		view.m_on("active", function () {
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */
			_vm.tip_status = 1;
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
				case "choose.addr":
					{ // 监视消息名称
						// ... 
						_vm.address = msg.params;
						app.session.m_set('address', _vm.address);
						break;
					}
			}
		});
	}
});