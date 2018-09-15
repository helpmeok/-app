define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
			require('../styles/user.money.detail.css'); // 载入 css 样式表
		var _vm = null;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data: {
					title: "账户明细",
					type: 0,
					renders: {
						default: {
							model: {
								list: []
							},
							ondraw: function() {
								return new Promise(function(next, fail) {
									app.service.user.m_account_balance_detail({
										token: app.data.user.token,
										type: _vm.type
									}, function(data) {
										for(var i = 0; i < data.amountsVoList.length; i++) {
											var e = data.amountsVoList[i];
											if(e.detailType==13){
											e.amounts=	e.amounts.replace('+','-');
												e.color = true
											}else{
												e.color = false
											}
										}
										console.log(data.amountsVoList)
										next({
											list: data.amountsVoList
										});
									}, fail);
								});
							}
						}
					}
				},
				methods: {

				}
			});
		});
		view.m_on("draw", function() {
			/* 每当模板渲染时触发 */

			return _vm.m_refresh();
		});

		view.m_on('append', function() {

			return new Promise(function(next) {
				setTimeout(function() {
					next();
				}, 1000);
			});

		});

		view.m_on("active", function() {
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */
		});

		view.m_on("enter", function() {
			/* 当 view 进入时触发 */
		});

		view.m_on("frozen", function() {
			/* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */
		});

		view.m_on("leave", function() {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
		});

		view.m_on("message", function(ev, msg) {
			/* 当 view 进入后, 从消息队列中获取消息列表, 循环触发 */
			// ev 事件源
			// msg 消息对象 属性: name, params
			switch(msg.name) {
				case "<name>":
					{ // 监视消息名称
						// ... 
						break;
					}
			}
		});
	}
});