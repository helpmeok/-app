define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		require('../styles/goods.auction.css');

		var _ry_chat = null;
		var _vm = null;
		var _RyService = null;
		var _transfer = null;

		function _m_live(src) {
			var videoObject = {
				container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
				variable: 'player', //该属性必需设置，值等于下面的new chplayer()的对象
				// loaded: 'loadedHandler', //监听播放器加载成功
				autoplay: false,
				live: true,
				video: {
					file: src,
					type: "video/m3u8"
				} //视频地址
			};
			var player = new ckplayer(videoObject);
		}



		function _m_is_weixin() {
			var _ua = window.navigator.userAgent.toLowerCase();
			if (_ua.match(/MicroMessenger/i) == 'micromessenger') {
				return true;
			} else {
				return false;
			}
		}

		function _m_get_float_price(current_price) {
			var _float_price = 0;
			if (current_price < 5000) {
				_float_price = 200;
			} else if (current_price >= 5000 && current_price < 10000) {
				_float_price = 500;
			} else if (current_price >= 10000 && current_price < 50000) {
				_float_price = 1000;
			} else if (current_price >= 50000) {
				_float_price = -1;
			}
			return _float_price;
		}
		var _e_audio = null;
		var _wx = null;
		var _audio_file_map = {
			'clinch-deal': 'audios/clinchDeal.mp3',
			'countdown-clues': 'audios/countDownClues.mp3',
			'countdown-three': 'audios/countDownThree.mp3',
			'countdown-two': 'audios/countDownTwo.mp3',
			'countdown-one': 'audios/countDownOne.mp3',
			'next-collection-bid': 'audios/nextCollectionBid.mp3'
		};

		function _m_play_audio(name) {
			var _src = _audio_file_map[name];
			_e_audio.attr('src', _src);
			if (_m_is_weixin()) {
				_wx.ready(function () {
					_e_audio.get(0).play();
				});
				_wx.config({});
			} else {
				_e_audio.trigger('play');
			}
		}

		view.m_on("init", function () {
			_vm = view.m_vm({
				mounted: function () {
					_e_audio = $$('.audio');
					// RongIMLib.RongIMEmoji.init() ;
				},
				data: {
					title: null,
					chat_scroll: {
						params: {
							onscroll_to_bottom: function () { // 滚动到底部
								_vm.bubble = 0; // 清除气泡
							}
						}
					},
					top200: {
						top: '200px'
					},
					orderState: {
						"background-color": "#e33"
					},
					isOrderPay: true,
					count_down_on: 0,
					goodsinfo: {},
					media: {},
					timer: 0,
					thumbs: {},
					swiper: {},
					gifts: {},
					pay: {
						params: {
							info: {

							}
						}
					},
					outprice: {
						params: {
							onok: function (price) { // 出价成功

							}
						}
					},
					type: 0, // 弹出面板的类型
					on: 0,
					ongift: 0,
					content: null,
					msges: [],
					flag: 1,
					goods: {},
					emojis: null,
					bubble: 0,
					model: {
						currentPrice: 0,
						startPrice: 0
					},
					e_input: null,
					status: 0,
					image_list: [],
					chat_scroll_is_bottom: false,
					titleType: null,
					collectionName: "",
					startPrice: 0,
					quantity: 0,
					collectionPic: "",
					screeningId: null,
					collectionId: null,
					order_text: "",
					orderId: "",
					good: {},
					w: 0,
					h: 0,
					mh: 0,
					balance: 0,
					order: {

					},
					giver: {

					},
					audioFile: "",
					imageFile: "",
					image: "",
					liverId: "",
					showGift: 0,
					giftList: [],
					giftId: null,
					ongiver: 0,
					giverPrice: 0,
					showAnimatGift: 0,
					fgl: 0,
					fgt: 0,
					fgw: 0,
					animateQueue: [],
					queueCount: 0,
					giftTimer: null,
					giftImage: null,
					form: {
						model: {},
						onsubmit: function () {
							_vm.m_msg_send_image(_vm.imageFile)
						},
						oninvalid: function () {
							view.m_reset_button('.submit');
						}
					}
				},
				ready: function () {
					this.e_input = $$('.input');
				},
				computed: {
					float_price: function () {
						var _price = this.model.currentPrice || this.model.startPrice;
						return _m_get_float_price(_price);
					},
					user: function () {
						return app.data.user;
					}
				},
				watch: {
					'msges': function () {
						this.m_chat_scroll_to_bottom();
					},
					'timer': function () {
						_vm.count_down_on = 1;
						setTimeout(function () {
							_vm.count_down_on = 0;
						}, 500);
					},
					'imageFile': function (url) {
						if (url.indexOf('http://7xkvov.com2.z0.glb.qiniucdn.com') == -1) { //解决上传成功后会再调用一次上传
							_vm.form.m_submit()
						}
					}
				},
				methods: {
					m_add_emoji_to_text: function (el) { // 添加符号表情
						var _e_text = $$('.text');
						var _text = _e_text.val();
						_text += el.emoji;
						if (_text) {
							this.$refs.msgSend.style.backgroundColor = '#e33'
						} else {
							this.$refs.msgSend.style.backgroundColor = '#b3b3b3'
						}
						_e_text.val(_text);
						// 发送表情
						// _vm.m_msg_send_text(); // 发送消息
					},
					m_msg_send_text: function () { // 发送文本消息
						var _user = app.data.user;
						var _e_text = $$('.text');
						var _msg = _e_text.val();
						if (_msg) {
							var _data = {
								type: 'text',
								status: 0,
								from: 1,
								userName: _user.nickname,
								nickname: _user.nickname,
								mobile: _user.mobile,
								userPortrait: _user.portraitUrl,
								grade: _user.grade,
								msg: _msg,
							}
							_ry_chat.m_send(_data).then(function () {
								_data.status = 1;
							});
							_vm.m_check_chat_scroll();
							_vm.msges.push(_data); // 直接加入
							_e_text.val('');
							this.$refs.msgSend.style.backgroundColor = '#b3b3b3'
							_vm.m_chat_scroll_to_bottom(); // 滚动条移动至底部
						}
					},
					m_msg_send_image: function (url) { // 发送图片消息
						if (url !== "") {
							var _user = app.data.user
							// url = 'http://7xkvov.com2.z0.glb.qiniucdn.com/001ff28e-4454-4b89-8a97-518f5e44b15f.png'
							var _data = { //下面的命名重复是因为前后台命名不一致导致要多命名
								type: 'image',
								status: 0,
								from: 1,
								userName: _user.nickname,
								nickname: _user.nickname,
								id: _user.mobile,
								imageUri: url,
								portrait: _user.portraitUrl,
								userPortrait: _user.portraitUrl,
								grade: _user.grade,
								msg: "<img width = '150px' src = '{src}' />".replace('{src}', url)
							}
							_ry_chat.m_send_image(_data).then(function () {
								_vm.image_list.push(url);
								_data.status = 1;
							});
							_vm.m_check_chat_scroll();
							_vm.msges.push(_data); // 直接加入
							_vm.m_chat_scroll_to_bottom(); // 滚动条移动至底部
						}
					},
					m_filter_emoji: function (content) {
						var _html = content.trim().replace(/\n/g, '<br/>');
						_html = _emoji.unifiedToHTML(_html);
						return _html;
					},
					m_push: function () {
						svc.m_push('goods.detail?id=' + _vm.collectionId + '&screeningId=' + _vm.screeningId)
					},
					m_create_order: function () {
						app.loader.m_show()
						app.service.exhibition.m_create_order({
							screeningId: _vm.screeningId,
							collectionId: _vm.collectionId,
							memberId: app.data.user.memberId
						}, function (data) {
							app.loader.m_hide()
							_vm.good.m_hide()
							_vm.order.m_show()
							_vm.order_text = "支付"
							_vm.orderId = data.orderId
						}, function (err) {
							app.loader.m_hide()
							app.toast.m_show_text(err.errorMessage);
						})
					},
					immediate_payorder: function () {
						svc.m_push('order.confirm?id=' + _vm.orderId)
						_vm.order.m_hide()
					},
					m_stat_animation: function (picUrl) { //开始礼物动画
						_vm.giftImage = picUrl;
						_vm.showAnimatGift = 1
						var count = 0;

						function fgMove() {
							_vm.giftTimer = window.requestAnimationFrame(fgMove);
							count++;
							if (count % 10 == 0) {
								var _fgl = Math.random() * 30
								var _fgt = Math.random() * 70
								var _fgw = 10 + Math.random() * 20
								_vm.fgl = _fgl;
								_vm.fgt = _fgt;
								_vm.fgw = _fgw;
							}
						}
						_vm.giftTimer = window.requestAnimationFrame(fgMove);
					},
					m_show_order: function () { //下单
						if (_vm.isOrderPay) {
							if (_vm.order_text == "支付") {
								svc.m_push('order.confirm?id=' + _vm.orderId)
							} else {
								_vm.good.m_show()
							}
						}
					},
					m_queue: function () { //监听礼物消息计时器
						var count = 0;

						function MyAnimation(params) {
							window.requestAnimationFrame(MyAnimation);
							if (count % 60 == 0) {
								MyTimer()
							}
							count++;
						}
						window.requestAnimationFrame(MyAnimation);
						var animationTimer = 0;

						function MyTimer() {
							if (_vm.animateQueue.length == 0)
								return;
							if (animationTimer == 0 && _vm.animateQueue.length > 0) {
								_vm.m_stat_animation(_vm.animateQueue[0]);
								animationTimer = 3;
							} else {
								animationTimer--;
								if (animationTimer == 0) {
									window.cancelAnimationFrame(_vm.giftTimer)
									_vm.showAnimatGift = 0
									_vm.animateQueue.splice(0, 1);
								}
							}
						}
					},
					m_refresh_exhibition: function () { // 摔性能商品
						return new Promise(function (next, fail) {
							var _id = view.query.id;
							var _param = {
								token: app.data.user.token,
								screeningId: _id
							};
							app.service.exhibition.m_get(_param, function (data) {
								_vm.model = data.auctionDetailVo;
								_vm.title = _vm.model.screeningName;
								app.m_set_title(_vm.title);
								app.service.goods.m_get_bytoken({
									screenId: _vm.model.screeningId,
									token: app.data.user.token,
									collectionId: _vm.model.collectionId
								}, function (ds) {
									_vm.goods = ds;
									if (data.auctionDetailVo.titleType == 6) { //如果是秒杀直播场次
										_vm.showGift = 1 //展示礼物按钮
										var _giftList = [];
										data.giftList.forEach(function (item, i) {
											item.onclick = 0
											item.style = {
												background: "url(" + item.picUrl + ")",
												backgroundRepeat: "no-repeat",
												backgroundSize: "100% 100%"
											}
										})
										var _length = 4;
										for (var i = 0; i < data.giftList.length / _length; i++) {
											var stat = _length * i;
											var end = _length * (i + 1)
											_giftList.push(data.giftList.slice(stat, end))
										}
										_vm.giftList = _giftList;
										_vm.titleType = 6
										_vm.flag = 0 //出价的控件取消
										_vm.collectionName = data.auctionDetailVo.collectionName
										_vm.startPrice = data.auctionDetailVo.startPrice
										_vm.quantity = data.auctionDetailVo.curQuantity
										_vm.screeningId = data.auctionDetailVo.screeningId
										_vm.collectionId = data.auctionDetailVo.collectionId
										_vm.collectionPic = data.auctionDetailVo.picUrl[0] || ''
										var image = new Image()
										image.src = _vm.collectionPic;
										_vm.mh = parseInt(document.documentElement.clientHeight * 0.25)
										image.onload = function () {
											var i = this.width / this.height
											var dw = parseInt(document.documentElement.clientWidth * 0.64)
											if (i <= 1) {
												_vm.h = _vm.mh
											} else {
												_vm.h = parseInt(dw / i)
											}
											_vm.w = parseInt(_vm.h * i)
										}
										_vm.orderId = data.orderId;
										if (data.orderId) {
											_vm.order_text = "支付"
										} else {
											_vm.order_text = "下单"
										}
										if (data.orderStateType == "WaitPay" || !data.orderStateType) {
											_vm.orderState = {
												"background-color": "#e33"
											}
											_vm.isOrderPay = true
										} else {
											_vm.order_text = "下单"
											_vm.isOrderPay = false
											_vm.orderState = {
												"background-color": "#b3b3b3"
											}
										}
									}
									next(data);
								}, function (err) {
									fail(err);
								});
								// 加载出价信息
							}, function (err) {
								if (30003 == err.errorCode) {
									app.modal.m_alert('提示', err.errorMessage, function () {
										svc.m_back();
									});
								} else {
									fail(err);
								}
							});
						});
					},
					m_load: function () {
						this.status = 0;
						return new Promise(function (next, fail) {
							var _user = app.data.user;
							var _id = view.query.id;
							// 获取基础信息
							if (_user) {
								_vm.m_refresh_exhibition().then(function (data) {
									if (_user) {
										_vm.m_join_chat_room(_id).then(function () {
											_vm.status = 1;
											next();
										});
									} else {
										next();
									}
								}, fail);
							} else {
								fail();
							}
						});
					},
					m_show_media: function (type) {
						this.on = 1;
						this.type = type;
					},
					m_show_gift: function () {
						this.ongift = 1;
					},
					m_show_giver: function () {
						if (_vm.giftId) {
							_vm.giver.m_show()
						} else {

						}
					},
					m_chose_gift: function (data) {
						var _el = data.el;
						var _index = data.index;
						_vm.giftList.forEach(function (el) {
							el.forEach(function (item) {
								item.onclick = 0
							})
						})
						_vm.giftList[_index.pi][_index.ci].onclick = 1
						_vm.giftId = _el.id
						_vm.ongiver = 1
						_vm.giverPrice = _el.price.toFixed(2)
					},
					m_gift_pay: function () {
						var _data = {
							token: app.data.user.token,
							liverId: _vm.liverId,
							giftId: _vm.giftId,
							screeningId: view.query.id,
							collectionId: _vm.model.collectionId
						}
						app.loader.m_show();
						app.service.order.m_gift_pay(_data, function (data) {
							_vm.balance = data.data.balance;
							app.loader.m_hide();
							_vm.giver.m_hide();
							_vm.ongift = 0;
						}, function (err) {
							app.loader.m_hide();
							app.modal.m_alert('提示', err.errorMessage);
						})
					},
					m_hide_media: function () {
						this.ongift = 0;
						this.on = 0;
					},
					m_change: function (v) {
						this.flag = v;
						if (1 == v) {
							this.on = 0;
						}
					},
					m_msg_change: function () {
						if (this.$refs.msgInput.value) {
							this.$refs.msgSend.style.backgroundColor = '#e33'
						} else {
							this.$refs.msgSend.style.backgroundColor = '#b3b3b3'
						}
					},
					m_input_focus: function () {

						this.on = 0;
						setTimeout(function () {
							$('body').prop('scrollTop', 999999);
						}, 450);
					},
					m_push_more: function () {
						svc.m_release_view('goods.list'); // 退出视图
						_vm.goodsinfo.m_hide();
						var _id = view.query.id;
						app.service.goods.m_list({
							screeningId: _id
						}, function (data) {
							var _url = 'goods.list?id=' + _id;
							svc.m_push(_url);
						}, function (err) {

						});
					},

					m_proc: function (msg) {
						if ('redpackage' == msg.type) { // 红包消息
							app.loader.m_show();
							var _id = view.query.id;
							var _data = {
								token: app.data.user.token,
								redpackageid: msg.redpackageid
							};
							app.service.redpackage.m_check(_data, function (ds) {
								if (1 == ds.clickCode) { // 可以抢
									app.vm.redpackage.params.onrob = function () {
										app.service.redpackage.m_rob(_data, function (ds) {
											svc.m_push('redpackage.list?id=' + msg.redpackageid);
										});
									}
									app.vm.redpackage.m_show();
								} else if (3 == ds.clickCode) {
									svc.m_push('redpackage.list?id=' + msg.redpackageid);
								} else {
									// clickCode
									app.toast.m_show_text('您来晚了,已抢光');
									svc.m_push('redpackage.list?id=' + msg.redpackageid);
								}
								app.loader.m_hide();
							}, function (err) {
								app.loader.m_hide();
								app.modal.m_alert('提示', err.errorMessage);
							});
						} else if ('image' == msg.type) { // 浏览图片
							var _image = msg.image || msg.imageUri;
							var _pos = _vm.image_list.indexOf(_image);
							app.session.m_set('photo.browse.list', _vm.image_list);
							app.session.m_set('photo.browse.index', _pos);
							svc.m_push('photo.browse');
						} else if ('voice' == msg.type) { //播放音频
							RongIMLib.RongIMVoice.stop(_vm.audioFile); //停止播放
							_vm.audioFile = msg.src
							// 音频文件长度   
							var duration = _vm.audioFile.length / 1024;
							// 预加载
							RongIMLib.RongIMVoice.preLoaded(_vm.audioFile, function () {
								// 播放声音
								RongIMLib.RongIMVoice.play(_vm.audioFile, duration);
							});
						}
					},
					m_chat_scroll_to_bottom: function () {
						setTimeout(function () {
							// 判断当前是否是底部
							if (_vm.chat_scroll_is_bottom) {
								_vm.chat_scroll.m_scroll_to_bottom(); // 滚动条移动至底部	
							}
						}, 60);
					},
					m_clear_bubble: function () { // 清除气泡
						this.chat_scroll.m_scroll_to_bottom(); // 滚动条移动至底部	
						this.bubble = 0;
					},
					m_photo_browse: function (el) {
						app.session.m_set('photo.browse.list', this.model.picUrl);
						app.session.m_set('photo.browse.index', this.swiper.m_get_index());
						svc.m_push('photo.browse');
					},
					m_quit_chat_room: function () {
						if (_ry_chat) { // 如果存在聊天
							return new Promise(function (next) {
								_ry_chat.m_quit_chat_room(view.query.id).then(function () {
									_ry_chat.m_exit();
									next();
								});
							});
						}
					},
					// m_send_image: function () {
					// 	app.toast.m_show_warn('开发中..');
					// },
					m_check_chat_scroll: function () {
						if (_vm.chat_scroll && _vm.chat_scroll.sep_scroll) {
							this.chat_scroll_is_bottom = _vm.chat_scroll.sep_scroll.m_is_bottom();
							if (!this.chat_scroll_is_bottom) {
								_vm.bubble++;
							}
						}
					},
					m_app_pay: function (orderid) { // 获取环境
						svc.m_push('order.list?state=1')
						_vm.pay.m_hide();
					},
					m_join_chat_room: function (id) {
						return new Promise(function (next) {
							var _rongyun_token = app.data.user.rongToken;
							_ry_chat = new _RyService({ // 融云服务
								key: window.debug ? 'k51hidwq1bh5b' : 'vnroth0krruzo',
								onmsg: function (msg) {
									// console.log(msg) ;
									// 插入记录
									// console.log(msg)
									if (msg) {
										if ('leader' == msg.type) { // 最新出价
											_vm.model.leaderPicUrl = msg.userPortrait;
											_vm.model.leaderName = msg.nickname;
											_vm.model.currentPrice = msg.price;
											_vm.timer = 0;
										} else if ('countDown' == msg.type) {
											if (2 == _vm.model.auctionState || 10 == _vm.model.auctionState) {
												_vm.timer = msg.number; // 允许倒计时的
												if (4 == _vm.timer) {
													_m_play_audio('countdown-clues');
												} else if (3 == _vm.timer) {
													_m_play_audio('countdown-three');
												} else if (2 == _vm.timer) {
													_m_play_audio('countdown-two');
												} else if (1 == _vm.timer) {
													_m_play_audio('countdown-one');
												}
											} else {
												_vm.timer = 0;
											}
										} else if ('nextCollection' == msg.type) { // 说明到下一件
											_vm.image_list = []; // 清除掉
											_m_play_audio('next-collection-bid');
											_vm.m_refresh_exhibition()
											// Promise.resolve(_vm.m_refresh_exhibition());
										} else if ('msgBidsuccess' == msg.type) { // 竞拍结束
											_vm.model.auctionState = 3;
										} else if ('auctionSucceed' == msg.type) { // 结束标志
											if (2 == _vm.model.auctionState) {
												if (_vm.model.leaderName) {
													_vm.model.auctionState = 3; // 成交
												} else {
													_vm.model.auctionState = 5; // 成交
												}
											}
										} else if ('auctionCollectionDate' == msg.type) { // 订单支付
											if (_vm.model.leaderName == app.data.user.nickname) {
												_vm.pay.params.info = {
													title: msg.order.title,
													price: msg.order.finalPrice,
													image: msg.order.url,
													coupon: msg.order.coupon,
													name: msg.order.sanshayName
												};
												_vm.pay.m_show();
												_m_play_audio('clinch-deal');
											}
										} else if ('image' == msg.type) { //
											_vm.image_list.push(msg.image);
											// image_list
										} else if ('API_Windws' == msg.type) {
											if (_vm.isOrderPay) {
												_vm.good.m_show()
											}
										} else if ('giftExtra' == msg.type) {
											var _giftList = [];
											_vm.giftList.forEach(function (item, index) {
												_giftList = _giftList.concat(item)
											})
											var _giftItem = _giftList.find(function (el) {
												return el.id == msg.giftId
											})
											_vm.animateQueue.push(_giftItem.picUrl) //动画队列增加
										}
										if (msg.msg) {
											// msg.msg = RongIMLib.RongIMEmoji.emojiToHTML(msg.msg);
											_vm.m_check_chat_scroll();
											msg.msg = RongIMLib.RongIMEmoji.emojiToHTML(msg.msg)
											_vm.msges.push(msg);
											_vm.m_chat_scroll_to_bottom(); // 滚动条移动至底部
										}

									}
								},
								oninit: function () { // 成功接入融云
									// app.toast.m_hide() ;
									next();
									_ry_chat.m_join_chat_room({
										id: id
									});
								}
							}); // 创建融云服务

							_ry_chat.m_init(_rongyun_token);
						});
					}
				}
			});
		});

		view.m_on("draw", function () {
			_vm.balance = app.data.user.balance.toFixed(2);
			/* 每当模板渲染时触发 */
			var _js_list = ['components/outprice', 'transfer.js', 'plugs/ry.service', 'ry.emoji.min', 'jweixin'];
			seajs.use(_js_list, function (Outprice, transfer, RyService, emoji, wx) {
				_RyService = RyService;
				_vm.emojis = new _RyService()._emojis
				_transfer = transfer;
				// RongIMLib.RongIMEmoji.init();
				_wx = wx;
				_vm.m_queue()
				_vm.m_load().then(function () {
					setTimeout(function () {
						_vm.goodsinfo.m_show(); //下拉展示拍品
					}, 600);
				}).catch(function (err) {
					console.log(err)
				}).then(function () {
					if (_vm.titleType == 6) {
						app.service.live.m_get_phone({ //获取直播地址
							screeningId: view.query.id,
							collectionId: _vm.model.collectionId
						}, function (data) {
							var _url = 'http://zapi.csj178.com/api/app/AuctionsInfo/GetDirectSeedings?mobile=' + data.liver.mobile
							$.ajax({
								url: _url,
								timeout: 15000,
								success: function (_data) {
									_vm.liverId = data.liver.id;
									if (!!_data.Data.VideoLinks) {
										_m_live(_data.Data.VideoLinks)
									} else {
										_m_live("")
									}
								},
								error: function (err) {
									console.log(err)
									_m_live("")
								}
							});
						}, function (err) {
							console.log(err)
							app.toast.m_show_text(err.errorMessage);
						})
					}
				}).catch(function (err) {
					console.log(err)
				});
			});
		});

		view.m_on("active", function () {
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */
			console.log(app.data.user)
		});

		view.m_on("enter", function () {
			/* 当 view 进入时触发 */
		});

		view.m_on('reload', function () {
			_vm.status = 0;
		});

		view.m_on("frozen", function () {
			/* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */
		});

		view.m_on("leave", function () {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */

		});

		view.m_on('frozen.back', function () {
			RongIMLib.RongIMVoice.stop(_vm.audioFile); //停止播放
			_vm.m_quit_chat_room();
			console.log('11111')
		});

		view.m_on("message", function (ev, msg) {
			/* 当 view 进入后, 从消息队列中获取消息列表, 循环触发 */
			// ev 事件源
			// msg 消息对象 属性: name, params
		});
	}
});