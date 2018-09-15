define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		require("../styles/home.css"); // 载入 css 样式表
		require("../../components/activity.js");
		require("../../components/download.app.js");
		var _vm = null;
		view.m_on("init", function () {
			_vm = view.m_vm({
				computed: {
					border_style: function () {
						return "border:1px solid " + this.base_color;
					}
				},
				// watch: {
				// 	show_type: function (v) {
				// 		if (2 == v) { // 加载预览列表的第一个
				// 			app.service.home.m_date_list({
				// 				pageIndex: 1,
				// 				pageSize: 10,
				// 				withDate: 1,
				// 			}, function (ds) {
				// 				var _dates = ds.data.screeningDate;
				// 				if (_dates.length) {
				// 					_dates.shift();
				// 					console.log(_dates)
				// 					_vm.dates = _dates;
				// 					if (_dates && _dates.length) {
				// 						var _first = _dates[0];
				// 						var _date = _first.screenDate;
				// 						_vm.date_tab_value = _date;
				// 						_vm.m_load_list(_date);
				// 					} else {
				// 						_vm.current_list = [];
				// 					}
				// 				} else {}
				// 			});
				// 			tpl.scroll = _vm.today_scroll;
				// 		} else if (1 == v) {
				// 			_vm.current_list = null;
				// 			tpl.scroll = _vm.preview_scroll;
				// 		}
				// 	}
				// },
				data: {
					title: "古美术",
					content: "今日拍场",
					// is_microtick: false,
					preview_scroll: {},
					today_scroll: {},
					dates: [],
					// virtual_list : new SepVirtualList({
					// 	counter : 20,
					// 	row : 3
					// }),
					show_type: 1,
					activity: {},
					date_tab_value: null,
					current_list: null,
					today_show_type: null,
					preview_show_type: null,
					field: [],
					fieldArr: [],
					dates: [],
					startTime: null,
					date_tab_value: null,
					renders: {
						ad: {
							model: {
								list: []
							},
							ondraw: function () {
								return new Promise(function (next, fail) {
									app.service.home.m_ad_list(
										null,
										function (data) {
											next({
												list: data.advertiseVoList
											});
										},
										fail
									);
								});
							}
						},
						default: {
							model: {
								list: []
							},
							ondraw: function () {
								return new Promise(function (next, fail) {
									app.service.sys.m_get_date(function (ds) {
										// app.service.home.m_act_list({
										// 	pageIndex: 1,
										// 	pageSize: 100,
										// 	startTime: new Date(ds.data).format('yyyy-MM-dd'),
										// 	withDate: 1,
										// 	afterAll: 0
										// }, function (ds) {
										// 	// 修改随机人数
										// 	//											console.log(ds) ;
										// 	var _list = ds.data.screeningListVos;
										// 	_list.forEach(function (item) {
										// 		var _url = item.pictureUrl;
										// 		var _pos = _url.lastIndexOf('?');
										// 		if (-1 != _pos) {
										// 			_url = _url.substring(0, _pos);
										// 		}
										// 		item.pictureUrl = _url + '?imageView2/0/w/480';
										// 	});
										// 	_vm.m_proc_activity(ds.data.screeningDate);
										// 	next({
										// 		list: _list
										// 	});
										// }, fail);
										app.service.home.m_date_list({
												pageIndex: 1,
												pageSize: 100,
												withDate: 1
											},
											function (ds) {
												var _dates =
													ds.data.screeningDate.slice(0, 7);//去7天预展
													console.log(_dates)
												if (_dates.length) {
													_dates.forEach(function (el, i) {
														if (i == 0) {
															el.onclick = true
														} else {
															el.onclick = false
														}
														console.log(el)
														el.screenNoList = el.screenNoList.map(function (item, index) {
															item = {
																count: item,
																onclick: false
															}
															if (index == 0) {
																item.onclick = true
															} else {
																item.onclick = false
															}
															return item
														})
													})
													console.log(_dates)
													_vm.dates = _dates;
													var _first = _dates[0];
													var _date =
														_first.screenDate;
													_vm.startTime = _date;
													_vm.date_tab_value = _date;
												}
												var _list =
													ds.data.screeningListVos;
												next({
													list: _list
												});
											},
											function (err) {
												next({
													list: []
												});
											}
										);
									});
								});
							},
							ondraw_after: function () {
								tpl.scroll = _vm.today_scroll;
							}
						}
					},
					base_color: app.data.__theme_color,
					base_bg: app.data.__theme_bg_class,
					base_fg: app.data.__theme_fg_class
				},
				methods: {
					m_wx: function () {
						var wxdata = {};
						wxdata.imgUrl =
							"http://www.gmsweipai.com/gms.app/modules/images/logo.png";
						if (!!sessionStorage.getItem("parentMobile")) {
							wxdata.link =
								window.location.href +
								"?parentMobile=" +
								sessionStorage.getItem("parentMobile");
						} else {
							wxdata.link = window.location.href;
						}
						var content = "爱古玩，上古美术！";
						if (content.length > 100) {
							wxdata.desc = content.substring(0, 100);
						} else {
							wxdata.desc = content;
						}
						wxdata.title = _vm.title;
						app.wxchat.m_share(wxdata);
					},
					m_refresh_preview: function () {
						this.m_load_list(_vm.date_tab_value);
					},
					m_push_url: function (url) {
						if (app.data.user) {
							svc.m_push(url);
						} else {
							_url = url;
							svc.m_force_put_msg("user.login", "code", "1");
							svc.m_push(
								"user.login?source={source}&location={location}&flag=2"
								.replace("{source}", "user.middl.man")
								.replace("{location}", "user.middl.man")
							);
						}
					},
					m_push_life: function () {
						// window.location.href = '../../../gms.app/activity/lifeservice/life.serve.html'
						window.location.href =
							"activity/lifeservice/life.serve.html";
					},
					m_push: function (el) {
						var _id = el.screeningId;
						var _type = el.titleType;
						if (_type == 2) { //百万场验证资格
							if (app.data.user) {
								app.service.home.m_push_millions({
									memberId: app.data.user.memberId
								}, function (data) {
									console.log(data)
									if (data.code == -1) {
										svc.m_push('check.member')
									} else if (data.code == 0) {
										app.modal.m_alert('提示', data.message);
									} else if (data.code == 1) {
										if (2 == el.screeningState || 6 == el.screeningState) {
											var _url = "goods.auction?id={id}".replace(
												"{id}",
												_id
											);
											svc.m_push(_url);
										} else {
											svc.m_push("goods.list?id=" + _id);
										}
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
						} else {
							if (2 == el.screeningState || 6 == el.screeningState) {
								var _url = "goods.auction?id={id}".replace(
									"{id}",
									_id
								);
								if (app.data.user) {
									svc.m_push(_url);
								} else {
									// 保存ID
									svc.m_force_put_msg("user.login", "args", _url);
									svc.m_push(
										"user.login?source={source}".replace(
											"{source}",
											view.opts.name
										)
									);
								}
							} else {
								svc.m_push("goods.list?id=" + _id);
							}
						}

					},
					m_push_new_show: function (ev) {
						var _e_target = ev.target;
						var _e_swiper_slide = $$(_e_target).parents(
							".swiper-slide"
						);
						var _index = parseInt(_e_swiper_slide.attr("index"));
						var _el = this.renders.ad.model.list[_index];
						var _id = _el.collectionId;
						var _screening_id = _el.domainId;
						var _advertise_type = _el.advertiseType;
						var _url = _el.htmlUrl;
						if (1 == _advertise_type) {
							var _url =
								"goods.detail?id=" +
								_id +
								"&screeningId=" +
								_screening_id;
							svc.m_push(_url);
						} else if (2 == _advertise_type) {
							var _url = "goods.list?id=" + _screening_id;
							svc.m_push(_url);
						} else {
							app.util.m_link(_url);
						}
					},
					m_load_list: function (data) {
						_vm.dates.forEach(function (el) {
							el.onclick = false
						})
						_vm.dates[data.index].onclick = true;
						_vm.startTime = data.el.screenDate;
						var timeIndex = _vm.dates.findIndex(function (e) {
							return e.screenDate == _vm.startTime
						})
						var _screenNo = _vm.dates[timeIndex].screenNoList.find(function (el) {
							return el.onclick == true
						})
						console.log(data)
						_screenNo = _screenNo.count
						app.service.home.m_count_list({
								pageIndex: 1,
								pageSize: 100,
								startTime: data.el.screenDate,
								screenNo: _screenNo
							},
							function (ds) {
								_vm.m_proc_activity(ds.data.screeningDate);
								var _screeningListVos =
									ds.data.screeningListVos;
								_vm.$model.list = _screeningListVos;
							},
							function (err) {
								_vm.$model.list = [];
							}
						);
					},
					m_load_list_item: function (data) {
						var timeIndex = _vm.dates.findIndex(function (e) {
							return e.screenDate == _vm.startTime
						})
						_vm.dates[timeIndex].screenNoList.forEach(function (el) {
							el.onclick = false
						})
						_vm.dates[timeIndex].screenNoList[data.index].onclick = true
						app.service.home.m_count_list({
								pageIndex: 1,
								pageSize: 100,
								startTime: _vm.startTime,
								screenNo: data.el.count
							},
							function (ds) {
								_vm.m_proc_activity(ds.data.screeningDate);
								var _screeningListVos =
									ds.data.screeningListVos;
								_vm.$model.list = _screeningListVos;
							},
							function (err) {
								console.log(err)
								console.log(_vm.dates)
								_vm.$model.list = [];
							}
						);
					},
					m_push_list_mores: function () {
						this.date_tab_value = -1;
						var _list = this.dates;
						var _el = _list[_list.length - 1];
						var _screenDate = _el.screenDate;
						app.service.home.m_current_list({
								pageIndex: 1,
								pageSize: 100,
								startTime: _screenDate,
								afterAll: 1
							},
							function (ds) {
								var _screeningListVos =
									ds.data.screeningListVos;
								_vm.current_list = _screeningListVos;
								// console.log("成功" , ds)
							},
							function (err) {
								_vm.current_list = null;
								// console.log("失败" , err)
							}
						);
					},
					m_proc_activity: function (dates) {
						function _m() {
							if (_activity) {
								// 活动弹窗
								_vm.activity.m_once_show({
									picture_url: _activity.pictureUrl,
									title: _activity.activityName,
									desc: _activity.activityExplain,
									url: _activity.url
								});
								if (1 == _activity.screenDisplayStyle) {
									if (1 == _type) {
										// _vm.virtual_list.m_set_col(2) ;
										_vm.today_show_type = "part";
									} else if (2 == _type) {
										_vm.preview_show_type = "part";
									}
								}
							} else {
								// _vm.virtual_list.m_set_col(1) ;
								if (1 == _type) {
									_vm.today_show_type = null;
								} else if (2 == _type) {
									_vm.preview_show_type = null;
								}
							}
						}
						if (dates.length) {
							var _type = _vm.show_type;
							var _activity = dates[0].activity;
							var _query = app.m_query();
							var _member_id = _query.memberid;
							if (!_member_id) {
								_m();
							}
						} else {
							// 否则就是有
							// 监视红包点击事件
							// app.vm.redpackage.params.__onrob = function() { // 再去弹出来
							// 	_m();
							// }
						}
					}
				}
			});
		});
		view.m_on("draw", function () {
			if (!!view.query.parentMobile) {
				sessionStorage.setItem("parentMobile", view.query.parentMobile);
			}
			if (_m_is_weixin()) {
				_vm.m_wx(); //微信分享
			}
			if (app.data.user) {
				console.log("账号：" + app.data.user.nickname);
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
			var _params = msg.params;
			switch (msg.name) {
				case "user.login":
					{
						// 用户登陆成功
						// 开始下拉摔性能
						svc.m_push(_params.args);
						break;
					}
			}
		});
	};
});