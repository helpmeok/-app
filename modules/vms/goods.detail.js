define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		var _vm = null;
		require('../styles/goods.detail.css');
		require('../../components/outprice'); // 引入出价
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					options: {},
					swiper: {},
					tab_index: 0,
					commet_list: [],
					offer_list: [],
					offer_len: 0,
					share: {},
					auction_state: 1,
					url: null,
					float_price: null,
					current_price: null,
					outprice: {
						params: {
							onready: function () {
								_vm.options.m_hide();
							},
							onok: function (type, price) {
								_vm.m_load_offer_list();
								if (2 == type) { // 委托出价
									_vm.$model.entrustPrice = price;
								} else {
									_vm.$model.currentPrice = price;
								}
								// 再刷新页面
								view.m_downpull();
							}
						}
					},
					comment_text: '',
					title: "藏品详情",
					video: '',
					isVideo: null,
					posterImage: "",
					canvas: false,
					canvas_image: "",
					is_show_mask: false,
					cw: null,
					ch: null,
					qrCodeSrc: '',
					qrUrl: "",
					titleType: null,
					renders: {
						default: {
							model: {

							},
							ondraw: function () {
								return new Promise(function (next, fail) {
									var _id = view.query.id;
									var _token = null;
									if (app.data.user) {
										_token = app.data.user.token;
									}
									var _param = {
										token: _token,
										collectionId: _id
									};
									app.service.goods.m_get(_param, function (data) {
										console.log(data)
										_vm.titleType = data.titleType
										_vm.m_invalid_millions(data.titleType)
										var mainCtx = document.getElementById('main')
										var dw = document.documentElement.clientWidth
										var dh = document.documentElement.clientHeight
										var canvas_title = data.collectionName.length > 48 ? data.collectionName.slice(0, 48) + '...' : data.collectionName;
										var canvas_price = data.startPrice;
										var canvas_grade = '品相等级:' + data.grade;

										function strBreak(str, h, w, f) { //换行
											var lineWidth = 0;
											var initHeight = 15 * 2; //绘制字体距离canvas顶部初始的高度
											var lastSubStrIndex = 0; //每次开始截取的字符串的索引
											for (var i = 0; i < str.length; i++) {
												lineWidth += mainCtx.measureText(str[i]).width;
												if (lineWidth >= w) {
													mainCtx.fillText(str.substring(lastSubStrIndex, i), 15 * 2, h + initHeight, w); //绘制截取部分
													initHeight += f; //20为字体的高度
													lineWidth = 0;
													lastSubStrIndex = i;
												}
												if (i == str.length - 1) { //绘制剩余部分
													mainCtx.fillText(str.substring(lastSubStrIndex, i + 1), 15 * 2, h + initHeight, w);
												}
											}
										}
										if (mainCtx.getContext) {
											mainCtx = mainCtx.getContext('2d')
											var starImg = new Image();
											starImg.setAttribute('crossOrigin', 'anonymous'); //解决toDataURL跨域
											starImg.src = data.collectionPic[0];
											starImg.onload = function () {
												//先把图片绘制在这里
												var i = starImg.width / starImg.height;
												var h = dw / i
												if (h + 250 >= dh) {
													_vm.cw = dw;
													_vm.ch = dh;
												} else {
													_vm.cw = dw;
													_vm.ch = h + 250;
												}
												var endImg = new Image();
												endImg.setAttribute('crossOrigin', 'anonymous');
												endImg.src = 'modules/images/canvas_back.png?v=' + Date.now();
												endImg.onload = function () {
													var qrCode = new Image();
													qrCode.setAttribute('crossOrigin', 'anonymous');
													qrCode.src = _vm.qrCodeSrc
													qrCode.onload = function () {
														var canvasLogo = new Image()
														canvasLogo.setAttribute('crossOrigin', 'anonymous');
														canvasLogo.src = 'modules/images/canvas_logo.png?v=' + Date.now();
														canvasLogo.onload = function () {
															if (h + 250 > dh) { //判断屏幕大小能否容下两张图
																var yh = dh - 260
																var yw = yh * i
																mainCtx.fillStyle = "#fff";
																mainCtx.fillRect(0, 0, dw * 2, (yh + 10) * 2);
																mainCtx.drawImage(starImg, ((dw - yw) / 2) * 2, 10 * 2, yw * 2, yh * 2);
																// mainCtx.drawImage(endImg, 0, dh - 250, dw, 250);
																mainCtx.fillStyle = "#fff";
																mainCtx.fillRect(0, (dh - 250) * 2, dw * 2, 250 * 2);
																mainCtx.drawImage(qrCode, (dw - 120) * 2, (dh - 160) * 2, 100 * 2, 100 * 2);
																mainCtx.drawImage(canvasLogo, (dw - 85) * 2, (dh - 125) * 2, 30 * 2, 30 * 2);
																mainCtx.font = "normal normal bold 40px sans-serif";
																mainCtx.fillStyle = '#333333'
																strBreak(canvas_title, (dh - 230) * 2, (dw - 30) * 2, 30 * 2)
																mainCtx.font = "normal normal bold 60px sans-serif";
																if (dw <= 340) { //针对屏幕较小的手机
																	mainCtx.font = "normal normal bold 50px sans-serif";
																}
																mainCtx.fillStyle = '#ff0000'
																if (_vm.titleType == 6) {
																	mainCtx.fillText('抢购价：¥' + canvas_price, 15 * 2, (dh - 100) * 2)
																} else {
																	mainCtx.fillText('起拍价：¥' + canvas_price, 15 * 2, (dh - 100) * 2)
																}
																mainCtx.font = "normal normal bold 34px sans-serif";
																mainCtx.fillStyle = '#333333'
																mainCtx.fillText(canvas_grade, 15 * 2, (dh - 30) * 2)
																mainCtx.font = "normal normal bold 24px sans-serif";
																mainCtx.fillStyle = '#333333'
																mainCtx.fillText('长按二维码查看详情', (dw - 125) * 2, (dh - 40) * 2)
															} else {
																mainCtx.drawImage(starImg, 0, 0, dw * 2, h * 2);
																// mainCtx.drawImage(endImg, 0, h, dw, 250);
																mainCtx.fillStyle = "#fff";
																mainCtx.fillRect(0, h * 2, dw * 2, 250 * 2);
																mainCtx.drawImage(qrCode, (dw - 120) * 2, (h + 90) * 2, 100 * 2, 100 * 2);
																mainCtx.drawImage(canvasLogo, (dw - 85) * 2, (h + 125) * 2, 30 * 2, 30 * 2);
																mainCtx.font = "normal normal bold 40px sans-serif";
																mainCtx.fillStyle = '#333333'
																strBreak(canvas_title, (h + 20) * 2, (dw - 30) * 2, 30 * 2)
																mainCtx.font = "normal normal bold 60px sans-serif";
																if (dw <= 340) {
																	mainCtx.font = "normal normal bold 50px sans-serif";
																}
																mainCtx.fillStyle = '#ff0000'
																if (_vm.titleType == 6) {
																	mainCtx.fillText('抢购价：¥' + canvas_price, 15 * 2, (h + 150) * 2)
																} else {
																	mainCtx.fillText('起拍价：¥' + canvas_price, 15 * 2, (h + 150) * 2)
																}
																mainCtx.font = "normal normal bold 34px sans-serif";
																mainCtx.fillStyle = '#333333'
																mainCtx.fillText(canvas_grade, 15 * 2, (h + 220) * 2)
																mainCtx.font = "normal normal bold 24px sans-serif";
																mainCtx.fillStyle = '#333333'
																mainCtx.fillText('长按二维码查看详情', (dw - 125) * 2, (h + 210) * 2)
															}
															_vm.canvas = true;
														}
													}
												}
											};

										} else {
											app.toast.m_show_text("该浏览器不支持此功能");
										}
										if (!!data.collectionVideo && data.collectionVideo !== '0') {
											_vm.isVideo = true;
											_vm.video = data.collectionVideo;
											_vm.posterImage = data.collectionPic[0];
										} else {
											_vm.isVideo = false;
										}
										next(data);
										var _current_price = parseFloat(data.copy_currentPrice);
										var _float_price = 0;
										if (_current_price < 5000) {
											_float_price = 200;
										} else if (_current_price >= 5000 && _current_price < 10000) {
											_float_price = 500;
										} else if (_current_price >= 10000 && _current_price < 50000) {
											_float_price = 1000;
										} else if (_current_price >= 50000) {
											_float_price = -1;
										}
										_vm.float_price = _float_price;
										// 分享
										if (_m_is_weixin()) {
											var wxdata = {};
											wxdata.imgUrl = data.collectionPic[0];
											if (!!sessionStorage.getItem('parentMobile')) {
												wxdata.link = window.location.href + '?parentMobile=' + sessionStorage.getItem('parentMobile');
											} else {
												wxdata.link = window.location.href;
											}
											var content = data.collectionExplain;
											if (content.length > 100) {
												wxdata.desc = content.substring(0, 100);
											} else {
												wxdata.desc = content;
											}
											wxdata.title = data.collectionName;
											app.wxchat.m_share(wxdata)
										}
									}, fail);
								});
							},
							ondraw_after: function () { // 数据注入之后
								_vm.m_load_offer_list();
							}
						}
					}
				},
				computed: {
					style: function () {
						if (this.$model.collectionId) {
							return 'bottom:50px';
						} else {
							return 'bottom:0px';
						}
					},
					user: function () {
						return app.data.user;
					}
				},
				watch: {
					tab_index: function (value) {
						if (2 == value) { // 点击了评论
							// 去加载评论列表
							this.m_load_commet_list();
						}
					}
				},
				methods: {
					m_show_image: function () {
						app.loader.m_show();
						var timer;

						function canvas() {
							timer = window.requestAnimationFrame(canvas);
							if (_vm.canvas) {
								app.loader.m_hide();
								var mycanvas = document.getElementById("main");
								var image = mycanvas.toDataURL("image/jpg");
								_vm.canvas_image = image
								_vm.is_show_mask = true
								window.cancelAnimationFrame(timer);
							}
						}
						timer = window.requestAnimationFrame(canvas);
					},
					is_show_canvas: function () {
						_vm.is_show_mask = false
					},
					m_login: function () {
						svc.m_push('user.login?source={source}'.replace('{source}', view.opts.name));
					},
					m_share: function () {
						app.vm.share.m_show({
							url: this.url
						});
					},
					m_add_comment: function () { // 添加评论
						var _user = app.data.user;
						var _id = view.query.id;
						if (this.comment_text.length) { // 开始添加评论
							if (_user) { // 已登陆
								// 请求评论接口
								var _data = {
									token: _user.token,
									discussContent: this.comment_text,
									collectionId: _id
								}
								app.service.goods.m_commet_add(_data, function (ds) {
									app.toast.m_show_ok('已评论');
									var _list = ds.discussVos.reverse();
									var _last = null;
									if (_list && _list.length) {
										_last = _list[0];
										_vm.commet_list.insert(0, _last);
									}
									_vm.comment_text = '';
								}, function (err) {
									app.modal.m_alert('提示', err.errorMessage);
								});
							} else { // 为登陆
								svc.m_force_put_msg('user.login', 'code', 'comment.add');
								_vm.m_login();
							}
						} else {
							app.toast.m_show_text('说点啥吧~');
						}
					},
					m_outprice: function (type) {
						if (app.data.user) {
							_vm.outprice.m_show(type);
						} else {
							_vm.m_login();
						}
					},
					m_submit: function () {
						var _id = view.query.id;
						var _screeningId = view.query.screeningId;
						var that = this;
						if (app.data.user) {
							app.service.home.m_is_speical({
								collectionId: _id,
								token: app.data.user.token
							}, function (ds) {
								if (ds.displayStyle == 4) {
									app.session.m_set('is_special', true);
									app.service.home.m_push_special({
										token: app.data.user.token,
										screeningId: _screeningId
									}, function (ds) {
										if (ds.data.code == 1 && ds.data.errCode == 6) { //没交保证金
											svc.m_push('special.deposit')
										} else if (ds.data.code == 0 && ds.data.errCode == 0) { //交了保证金
											app.service.goods.m_get({
												token: app.data.user.token,
												collectionId: _id
											}, function (data) {
												var _screening_id = data.screeningId;
												var _auction_state = data.auctionState;
												if ('预展中' == _auction_state) {
													that.options.m_show();
												} else if ('正在拍卖' == _auction_state || '未拍卖' == _auction_state) {
													svc.m_ghost_back('home', function () {
														// svc.m_release_view('goods.list') ; // 退出视图
														// svc.m_release_view('goods.auction') ; // 退出视图
														svc.m_put_msg('goods.auction', 'refresh');
														var _url = 'goods.auction?id=' + _screening_id;
														svc.m_push(_url);
													});
												} else if ('流拍' == _auction_state) {
													_vm.auction_state = 0;
												} else if ('已卖出' == _auction_state) {
													_vm.auction_state = 0;
												}
											}, function (err) {
												app.modal.m_alert('提示', err.errorMessage);
											})
										}
									}, function (err) {
										app.modal.m_alert('提示', err.errorMessage, function () {

										})
									})
								} else {
									app.service.goods.m_get({
										token: app.data.user.token,
										collectionId: _id
									}, function (data) {
										var _screening_id = data.screeningId;
										var _auction_state = data.auctionState;
										if ('预展中' == _auction_state) {
											that.options.m_show();
										} else if ('正在拍卖' == _auction_state || '未拍卖' == _auction_state || '直播中' == _auction_state) {
											svc.m_ghost_back('home', function () {
												// svc.m_release_view('goods.list') ; // 退出视图
												// svc.m_release_view('goods.auction') ; // 退出视图
												svc.m_put_msg('goods.auction', 'refresh');
												var _url = 'goods.auction?id=' + _screening_id;
												svc.m_push(_url);
											});
										} else if ('流拍' == _auction_state) {
											_vm.auction_state = 0;
										} else if ('已卖出' == _auction_state) {
											_vm.auction_state = 0;
										}
									}, function (err) {
										app.modal.m_alert('提示', err.errorMessage);
									})
								}
							}, function (err) {
								app.modal.m_alert('提示', ds.data.message, function () {

								})
							})

						} else {
							svc.m_force_put_msg('user.login', 'code', 'submit');
							_vm.m_login();
						}
					},
					m_toggle_zan: function () { // 点赞处理
						var _id = view.query.id;
						if (app.data.user) {
							app.service.goods.m_get_thum_up({
								token: app.data.user.token,
								collectionId: _id
							}, function (data) {
								if (_vm.$model.praised) { // 1 true // 已点赞
									app.toast.m_show_text('取消点赞');
									_vm.$model.praised = false;
									_vm.$model.praiseNum--;
								} else {
									app.toast.m_show_text('已点赞');
									_vm.$model.praised = true;
									_vm.$model.praiseNum++;
								}
							});
						} else {
							_vm.m_login();
						}
					},
					m_toggle_focus: function () { // 1 true // 已关注
						if (app.data.user) {
							var _id = view.query.id;
							app.service.goods.m_get_attention({
								token: app.data.user.token,
								collectionId: _id
							}, function (data) {
								if (_vm.$model.attentioned) { // 1 true // 已关注
									app.toast.m_show_text('取消关注');
									_vm.$model.attentioned = false;
								} else {
									app.toast.m_show_text('已关注');
									_vm.$model.attentioned = true;
								}
							});
						} else {
							_vm.m_login();
						}
					},
					m_comment_input_focus: function () {
						setTimeout(function () {
							$('body').prop('scrollTop', 9999);
						}, 450);
					},
					m_load_commet_list: function () { // 加载评论列表
						var _id = view.query.id;
						app.service.goods.m_commet_list({
							collectionId: _id
						}, function (data) {
							_vm.commet_list = data.discussVos.reverse();
						}, function (err) {
							app.toast.m_show_text(err.errorMessage);
						});
					},
					m_push_offer_list: function () {
						if (this.offer_len > 0) {
							var _url = 'offer.list?collection_id={collectionId}&screening_id={screeningId}';
							_url = _url.replace('{collectionId}', this.$model.collectionId).replace('{screeningId}', this.$model.screeningId);
							svc.m_push(_url);
						} else {
							if (app.data.user) {
								app.toast.m_show_text('暂无出价记录!');
							} else {
								svc.m_force_put_msg('user.login', 'code', 'push.offer.list');
								this.m_login();
							}
						}
					},
					m_photo_browse: function () { // 图片浏览器
						app.session.m_set('photo.browse.list', this.$model.collectionPic);
						app.session.m_set('photo.browse.index', this.swiper.m_get_index());
						svc.m_push('photo.browse');
					},
					m_load_offer_list: function () { // 加载出价记录列表
						var _id = view.query.id;
						var _screening_id = _vm.$model.screeningId;
						if (app.data.user) {
							app.service.goods.m_biddetail_list({
								token: app.data.user.token,
								collectionId: _id,
								screenIngId: _screening_id
							}, function (data) {
								var _list = [];
								var _temp_list = data.bidDetailVos;
								_temp_list.reverse();
								var _len = _temp_list.length > 3 ? 3 : _temp_list.length;
								for (var i = 0; i < _len; i++) {
									_list.push(_temp_list[i]);
								}
								_vm.offer_list = _list;
								_vm.offer_len = _temp_list.length;
							}, function (err) {

								app.modal.m_alert('提示', err.errorMessage);
							});
						}
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
				},
				updated: function () {
					var url = window.location.href;
					new QRCode(document.getElementById("qrcode"), url);
					var imgSrc = document.querySelector('#qrcode img').src;
					_vm.qrCodeSrc = imgSrc
				},

			});
		});
		view.m_on("draw", function () {
			/* 每当模板渲染时触发 */
			_vm.url = window.location.href;
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

		view.m_on("leave.back", function () {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
			_vm.tab_index = 0;

		});

		view.m_on("message", function (ev, msg) {
			/* 当 view 进入后, 从消息队列中获取消息列表, 循环触发 */
			// ev 事件源
			// msg 消息对象 属性: name, params
			console.log(msg)
			var _code = msg.params.code;
			switch (msg.name) {
				case "user.login":
					{ // 监视消息名称
						// ... 
						if ('comment.add' == _code) {
							_vm.m_add_comment();
						} else if ('push.offer.list' == _code) {
							_vm.m_push_offer_list();
						} else if ('submit' == _code) {
							_vm.m_submit();
						}
						break;
					}
			}
		});
	}
});