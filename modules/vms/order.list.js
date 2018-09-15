define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		var _vm = null;
		require('../styles/order.list.css');
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					title: null,
					state: 0,
					// checkOrderOne: true,
					checkOrderAll: false,
					totalPrice: 0,
					orderArr: [],
					checkOrder: [],
					orderLength: 0,
					renders: {
						default: {
							model: {
								list: []
							},
							ondraw: function () {
								return new Promise(function (next, fail) {
									var _state = view.query.state;
									_vm.state = _state;
									app.service.order.m_list({
										token: app.data.user.token,
										state: parseInt(_vm.state)
									}, function (data) {
										console.log(data)
										data.orderList.forEach(function (ele) {
											_vm.checkOrder.push(ele.orderId + ',' + ele.bidPrice)//选择框的值
										});
										next({
											list: data.orderList
										});
									}, fail);
								});
							}
						}
					}
				},
				watch: {
					checkOrderAll: function (value) {
						if (value) {
							_vm.orderArr = _vm.checkOrder//所有订单选中
						} else {
							_vm.orderArr = [];//清空选中订单
						}
					},
					orderArr: function (value) {
						if (_vm.orderArr.length == _vm.checkOrder.length) {//所有订单选中时全选为true
							_vm.checkOrderAll = true;
						}
						var price = 0;
						_vm.orderArr.forEach(function (ele) {
							ele = Number(ele.split(',')[1])
							price += ele
						})
						_vm.totalPrice = price.toFixed(2)//计算选中订单的总额
						_vm.orderLength = _vm.orderArr.length;//结算件数
					}
				},
				methods: {
					m_push: function (el) {
						app.session.m_set('orderId', el.orderId);
						var _order_type = el.orderStateType;
						var _order_id = el.orderId;
						if ('2' == _order_type || '3' == _order_type || '12' == _order_type || '4' == _order_type) {
							var _url = 'order.detail?id=' + _order_id;
							svc.m_push(_url);
						} else {
							var _url = 'order.confirm?id=' + _order_id;
							svc.m_push(_url);
							// app.modal.m_confirm('提示', '前往下载古美术APP进行支付？', function () {
							// if ('iOS' == app.m_device()) { // IOS设备
							// 	window.location = 'https://itunes.apple.com/app/apple-store/id1157454646';
							// } else {
							// 	window.location = 'http://sj.qq.com/myapp/detail.htm?apkName=cn.cloudtop.ancientart_android';
							// }
							// console.log(app.data.user)
							// app.service.api.wechat.m_wx_pay({
							// 	token: app.data.user.token,
							// 	payRecordsId: 3144
							// }, function (data) {
							// 	console.log(data)
							// 	if (typeof WeixinJSBridge == "undefined") {
							// 		if (document.addEventListener) {
							// 			document.addEventListener('WeixinJSBridgeReady',
							// 				onBridgeReady, false);
							// 		} else if (document.attachEvent) {
							// 			document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
							// 			document
							// 				.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
							// 		}
							// 	} else {
							// 		onBridgeReady();
							// 	}
							// 	var _data = {
							// 		appid: "wx25c0f070f958700e",
							// 		noncestr: "0MxH1J97YtY9htsR",
							// 		packageUPPER_CASE_SHOULD_BE_REMOVED: "Sign=WXPay",
							// 		partnerid: "1263877901",
							// 		prepayid: "wx212129441348003b32a3ba780625894101",
							// 		sign: "57F1AA1DDD729EECB4C1B7E7F545E64D",
							// 		timestamp: "1529587783"
							// 	}
							// 	function onBridgeReady() {
							// 		WeixinJSBridge
							// 			.invoke(
							// 				'getBrandWCPayRequest',
							// 				_data,
							// 				function (res) {
							// 					if (res.err_msg == "get_brand_wcpay_request:cancel")
							// 						alert("取消支付");
							// 					if (res.err_msg == "get_brand_wcpay_request:fail")
							// 						alert("支付失败");
							// 					if (res.err_msg == "get_brand_wcpay_request:ok") {
							// 						alert("支付成功");
							// 					}
							// 				});
							// 	}
							// }, function (err) {
							// 	console.log(err)
							// })
							// });
						}

					},
					m_pay: function () {
						if (_vm.orderLength != 0) {
							var _order_id = '';
							_vm.orderArr.forEach(function (item) {
								_order_id += item.split(',')[0] + 'N'
							})
							console.log(_order_id)
							svc.m_push('order.confirm?id=' + _order_id)
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
			var _state = view.query.state;
			switch (parseInt(_state)) {
				case 0:
					{
						_vm.title = "全部订单";
						break;
					}
				case 1:
					{
						_vm.title = "待付款";
						break;
					}
				case 2:
					{
						_vm.title = "待收货";
						break;
					}
				case 3:
					{
						_vm.title = "已发货";
						break;
					}
				case 4:
					{
						_vm.title = "售后服务";
						break;
					}
			}
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