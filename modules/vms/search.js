define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		var _vm = null;
		require('../styles/search.css');
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					title: "搜索",
					content: null,
					list: [],
					virtual_list: new SepVirtualList({
						size: 50,
						buffer: 33,
					}),
					isbegin: 0
				},
				methods: {
					m_submit: function () {
						_vm.isbegin = 1;
						app.service.search.m_search({
							keyWord: _vm.content,
							pageSize: 999,
							pageIndex: 1,
						}, function (data) {
							_vm.list = data.collectionVOs;
							_vm.virtual_list.m_bind(data.collectionVOs);
							view.m_reset_button('.submit');
							app.toast.m_show_text('已搜到: ' + _vm.list.length + '藏品');
						}, function (err) {
							view.m_reset_button('.submit');
							app.modal.m_alert('提示', err.errorMessage);
						});
					},
					m_gain: function (el) {
						var _id = el.collectionId;
						app.service.goods.m_get({
							collectionId: _id
						}, function (data) {
							var _screening_id = data.screeningId;
							var _url = 'goods.detail?id=' + _id + '&screeningId=' + _screening_id;
							svc.m_push(_url);
						}, function (err) {
							app.modal.m_alert('提示', err.errorMessage);
						});
					}
				}
			});
		});
		view.m_on("draw", function () {
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