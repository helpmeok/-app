define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		require('../styles/goods.list.css');
		var _vm = null;
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					title: "预展列表",
					// virtual_list : new SepVirtualList({
					// 	counter : 20,
					// 	row : 10
					// }),
					titleType: 1,
					renders: {
						default: {
							model: {
								start_time: null,
								list: [],
								about_screen: null,
								screening_id: null
							},
							ondraw: function () {
								return new Promise(function (next, fail) {
									var _id = view.query.id;
									app.service.goods.m_list({
										screeningId: _id
									}, function (data) {
										next({
											list: data.collectionVOs,
											start_time: data.startTime,
											about_screen: data.aboutScreen,
											screening_id: data.screeningId
										});
										_vm.m_invalid_millions(data.titleType)
										_vm.titleType = data.titleType == 6 ? 0 : 1 //0是秒杀场  1是普通场

										if (_m_is_weixin()) {
											var wxdata = {};
											wxdata.imgUrl = data.collectionVOs[data.collectionVOs.length - 1].picUrl;
											if (!!sessionStorage.getItem('parentMobile')) {
												wxdata.link = window.location.href + '?parentMobile=' + sessionStorage.getItem('parentMobile');
											} else {
												wxdata.link = window.location.href;
											}
											var content = data.aboutScreen;
											if (content.length > 100) {
												wxdata.desc = content.substring(0, 100);
											} else {
												wxdata.desc = content;
											}
											wxdata.title = data.screeningName;
											app.wxchat.m_share(wxdata)
										}
										// _vm.virtual_list.m_bind(data.collectionVOs) ;
									}, fail);
								})
							}
						}
					}
				},
				methods: {
					m_push: function (el) {
						var _url = 'goods.detail?id=' + el.collectionId + '&screeningId=' + this.$model.screening_id;
						svc.m_push(_url);
					},
					m_invalid_millions: function (_type) {
						if (_type == 2) { //百万场验证资格
							if (app.data.user) {
								app.service.home.m_push_millions({
									memberId: app.data.user.memberId
								}, function (data) {
									if (data.code == -1) {
										svc.m_push('check.member')
									} else if (data.code == 0) {
										svc.m_push('/')
										app.modal.m_alert('提示', data.message);
									}
								}, function (err) {
									app.modal.m_alert('提示', err.errorMessage);
								})
							} else {
								var _url = "/"
								svc.m_force_put_msg("user.login", "args", _url);
								svc.m_push(
									"user.login?source={source}".replace(
										"{source}",
										view.opts.name
									)
								);
							}
						}
					}
				}
			});
		});
		view.m_on("draw", function () {
			/* 每当模板渲染时触发 */
			if (!!view.query.parentMobile) {
				sessionStorage.setItem('parentMobile', view.query.parentMobile)
			}
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