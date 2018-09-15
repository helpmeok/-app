/*
	sepui main file ( 入口文件 )
*/
// ------------------ (start) -------------------
define(function (require, exports, module) {
	app.m_set_mode("mobile"); // 设置 app 模式 mobile or pc
	app.m_set_container($('.sepui')); // 设置 sepui 容器
	require("main.css");
	require('global.css');
	var _SepGlobal = require('global.js');
	// var wx = require('http://res.wx.qq.com/open/js/jweixin-1.2.0.js'); // 载入 wx-sdk
	transfer = require('./transfer'); // 导入 transfer 代码
	if ('iOS' == app.m_device()) { // 如果是苹果设备
		// window.native = transfer ; 
	}
	// 导入全局样式文件
	require("//at.alicdn.com/t/font_dwkhimozh0duc8fr.css"); // 图标库
	var _svc = new SepViewController(app.m_get_container()); // 创建一个视图控制器( 核心对象 svc )
	app.m_set_theme('red'); // 设置红色主题
	SepRequest.keys.status = 'errorCode';
	SepRequest.keys.msg = 'errorMessage';
	SepRequest.codes.oks = [0]; // 正常
	SepRequest.codes.sessionlesses = [24002, 24001]; // 未登录
	if (_m_is_weixin()) {
		// app.m_get_container().addClass('weixin');
		var WxChat = require('./plugs/wechat.js')
		app.wxchat = new WxChat()
	}

	function _m_cache_login() {
		function _m(token) {
			return new Promise(function (next) {
				app.service.user.m_get_by_token({
					token: token
				}, function (ds) {
					var _user = ds.data;
					app.local.m_set('user', _user);
					next(_user);
				}, function () {
					app.local.m_remove('user');
					next();
				});
			});
		}

		return new Promise(function (next) {
			var _env = transfer.m_get_env();
			if (null != _env) {

				transfer.onUserToken = function (token) {
					_m(token).then(next);
				}
				transfer.m_get_user_token(); // 获取用户 token
			} else {
				var _user = app.local.m_get('user');
				if (_user) {
					// 继续去登录
					_m(_user.token).then(next);
				} else {
					next();
				}
			}
		});
	}

	function _m_init() { // 初始化
		return new Promise(function (next) {
			// 这里可以做一些初始化的工作
			next();
		});
	}
	_m_init().then(function () {
		return new Promise(function (next) {
			_m_cache_login().then(function (user) {
				next(user);
			});
		});
	}).then(function (user) {
		app.data.user = user;
		app.m_set_title("古美术"); // 设置标题
		/* 关键视图配置代码 */
		_svc.m_config({
			async: false, // 不使用异步
			views: [{
					name: "home",
					path: "$root",
					slide_back: false
				}, // name : 视图名称 path : 视图URL路径 $root 表示根路径 slide_back 表示不可滑动

				{
					name: "timer.shop",
					slide_back: false,
					uppull: true
				}, // 限时拍卖
				{
					name: "msg.list",
					slide_back: false,
					uppull: true
				}, // 案例
				{
					name: "user.center",
					slide_back: false
				}, // 我的
				{
					name: 'seckill.special',
					slide_back: false
				}, // 秒杀
				{
					name: "follow.list"
				}, // 关注
				{
					name: "search"
				}, // 搜索页
				{
					name: 'goods.auction',
					async: true,
					login: true,
					slide_back: false
				}, // 商品拍卖
				{
					name: 'more.list'
				}, //更多预展列表
				{
					name: "goods.list"
				}, // 商品列表
				{
					name: 'user.myprice'
				}, //我的出价
				{
					name: 'user.recommend'
				}, //我的推荐奖励
				{
					name: 'user.subordinate'
				}, //我的下级信息
				{
					name: 'user.moreprice'
				}, //更多出价

				{
					name: "next"
				}, // 下一页
				{
					name: "user.info"
				},
				{
					name: 'user.money'
				},
				{
					name: 'user.updatepaypwd'
				},
				{
					name: 'user.setpaypwd'
				},
				{
					name: 'user.change.loginpwd'
				},
				{
					name: 'bank.list'
				},
				{
					name: 'bank.edit'
				},
				{
					name: 'user.settings'
				}, // 用户设置中心
				{
					name: 'user.member.center'
				},
				{
					name: 'user.middl.man'
				},
				{
					name: 'user.money.detail',
					uppull_loader: true
				},
				{
					name: 'order.list'
				},
				{
					name: 'order.confirm'
				},
				{
					name: 'order.detail'
				},
				{
					name: 'address.list'
				},
				{
					name: 'address.choose'
				},
				{
					name: 'address.edit'
				},
				{
					name: 'user.packet'
				},
				{
					name: 'offer.list'
				},
				{
					name: 'user.charge'
				},
				{
					name: 'activity.detail',
					animate: {
						name: 'vr'
					}
				},
				{
					name: 'seckill.list',
					async: true,
					refresh: {
						type: 'loop'
					}
				}, //秒杀列表
				{
					name: 'seckill.detail'
				}, //秒杀详情
				{
					name: "special.deposit"
				}, //专场规则
				{
					name: 'user.withdrawals'
				},
				{
					name: 'user.login',
					animate: {
						name: 'vr'
					},
					downpull_refresh: null,
					temp: 1
				}, // 用户登陆
				{
					name: 'user.reg',
					downpull_refresh: null
				}, // 用户注册
				{
					name: 'welcome',
					animate: {
						name: 'fade'
					},
					slide_back: false
				},
				{
					name: 'photo.browse',
					animate: {
						name: 'vr'
					},
					downpull_refresh: null
				},
				{
					name: 'transfer'
				},
				{
					name: 'goods.detail.copy',
					mapping: 'goods.detail'
				}, // 商品详情
				{
					name: 'user.feedback'
				},
				{
					name: 'user.settings'
				},
				{
					name: 'user.findpwd'
				},
				{
					name: 'redpackage.list',
					animate: {
						name: 'vr'
					}
				}, // 红包列表
				{
					name: 'problem'
				},
				{
					name: 'about'
				},
				{
					name: 'tools.list'
				},
				{
					name: 'tools.detail'
				},
				{
					name: 'user.red.list'
				}, //现场拍卖红包

				{
					name: 'today.news'
				}, //头条资讯
				{
					name: 'goods.detail'
				}, // 商品详情
				{
					name: 'check.member'
				}, // 百万场申请

				// ------------- 在此处配置视图 -----------
				// {name : <视图名称>, path : <路径,默认与视图名称一致>, slide_back : <是否可滑动后退>}
			]
		});

		app.m_init(_svc); // 整个应用开始初始化
		var _red_package_once = app.session.m_get('red_package_once');
		var _gesture_once = app.session.m_get('gesture_once');

		_svc.m_on('view.active.after', function (ev, v) {
			var _array = ['goods.detail', 'goods.list', 'seckill.list'];
			var _name = v.opts.name;
			var _gesture_counter = app.local.m_get('gesture_counter');
			if (!_gesture_counter) {
				_gesture_counter = 1;
			}
			if (_array.contains(_name) && !_gesture_once && _gesture_counter < 3) {
				_gesture_once = true;
				app.session.m_set('gesture_once', true);
				_gesture_counter++; // 总数 + 1
				app.local.m_set('gesture_counter', _gesture_counter);
				setTimeout(function () {
					app.vm.gesture.m_show();
				}, 1000);
			}
		});

		_svc.m_on('filter', function (ev, args) { // 视图激活
			return new Promise(function (next, fail) {
				if (null == app.data.user && 'user.login' != args.opts.name && args.opts.login) {
					fail({
						code: 0x110,
						location: args.location,
						source: args.opts.name
					});
				} else {
					next();
				}
			});
		});

		_svc.m_on('catch', function (ev, args) {
			if (0x110 == args.code) {
				var _url = 'user.login?{source}&location={location}&back={back}'
					.replace('{source}', args.source)
					.replace('{back}', '$root')
					.replace('{location}', encodeURIComponent(args.location));
				this.m_push(_url);
			}
		});

		_svc.m_on('view.active.after', function (ev, v) {
			if (!app.data.user) { // 未登录的情况
				var _array = ['home', 'seckill.special'];
				var _name = v.opts.name;
				var _query = app.m_query();
				var _member_id = _query.memberid;
				if (_array.contains(_name) && !_red_package_once && _member_id) { // 并且存在 member_id
					_red_package_once = true;
					app.session.m_set('red_package_once', true);
					setTimeout(function () {
						app.vm.quickreg.m_set_member_id(_member_id);

						app.vm.redpackage.params.onrob = function () {
							this.m_hide();
							app.vm.quickreg.m_show();
						}
						app.vm.redpackage.m_show();
					}, 1000);
				}


				// if(_m_is_weixin()) {
				// 	// 调用分享接口
				// 	var _config = app.service.api.wechat.m_config(window.location.href.split('#')[0]) ;
				// 	wx.ready(function() {
				// 		if(v.opts.share) {
				// 			wx.showAllNonBaseMenuItem() ; // 显示基础接口
				// 			wx.hideMenuItems({ // 隐藏复制按钮
				// 				menuList : ['menuItem:copyUrl']
				// 			}) ;
				// 			if($.isFunction(v.onwechat_share)) {
				// 				v.onwechat_share().then(function(data) {
				// 					var _settings = $.extend({
				// 						success: function () {

				// 					    },
				// 					    cancel: function () {

				// 					    }
				// 					}, data) ;
				// 					wx.onMenuShareTimeline(_settings);
				// 				}) ;
				// 			}
				// 		} else {
				// 			wx.hideAllNonBaseMenuItem() ;
				// 		}
				// 	}) ;
				// 	// _config.debug = true ;
				// 	wx.config(_config) ;
				// }


			}
		});
		_svc.m_on('view.enter.after', function (ev, v) {
			// if (_m_is_weixin()) {
			// 	var _title = v.vm.m_get_title();
			// 	if (_title) {
			// 		app.m_set_title(_title); // 设置标题
			// 	}
			// }
			app.m_set_title('古美术拍卖平台'); // 设置标题
		});

		// app.m_set_welcome(['home', 'goods.detail', 'goods.list', 'seckill.list', 'seckill.detail', 'activity.detail']) ;
		// app.m_set_welcome(['home']);
		_svc.m_on('once', function (ev, v) {
			var _query = app.m_query();
			var _name = app.m_get_hash();
			if (-1 != _name.indexOf('goods.list')) {
				this.m_preloader('$root');
			} else if (-1 != _name.indexOf('seckill.list')) {
				this.m_preloader('seckill.special');
			} else if (-1 != _name.indexOf('seckill.detail')) {
				this.m_preloader('seckill.special');
				this.m_preloader('seckill.list?id=' + _query.id);
			} else if (-1 != _name.indexOf('goods.detail')) {
				this.m_preloader('$root');
				var _screeningId = _query.screeningId;
				var _id = _query.id;
				if (!_screeningId) { // 不存在
					// 查询商品
					app.service.goods.m_get_sync({
						collectionId: _id
					}, function (ds) {
						_screeningId = ds.screeningId;
					});
				}
				this.m_preloader('goods.list?id=' + _screeningId);
			} else if (-1 != _name.indexOf('goods.auction')) {
				this.m_preloader('$root');
			} else if (-1 != _name.indexOf('activity.detail')) {
				this.m_preloader('seckill.special');
			}
		});
		_svc.m_on('complete', function (ev, v) {
			app.vm = SepGlobalVM.m_create({
				el: '.global',
				data: {
					gesture: {},
					share: {},
					weixin_share: {},
					redpackage: {}, // 红包
					quickreg: {
						params: {}
					} // 快速注册
				}
			});
		});
		_svc.m_set_mode(app.m_get_taste()); // 设置模式 app.m_get_mode() 可返回 极速模式 和 兼容模式
		new _SepGlobal().m_install(_svc);
		/* 配置导航条 */
		var _env = transfer.m_get_env();
		if (null == _env) {
			var _nav = null;
			app.nav = _nav = new SepNav(_svc, ".nav", [ // 创建导航条
				{
					text: "首页",
					name: "$root",
					icon: "icon-home",
					onicon: "icon-homefill",
					url: false
				},
				//				{text : "秒杀", name : "seckill.special", icon : "icon-seckill", onicon : "icon-seckillfill"},
				{
					text: "限时拍卖",
					name: "timer.shop",
					icon: "icon-shoplight",
					onicon: "icon-shopfill",
					url: false
				},
				// {
				// 	text: "商城",
				// 	name: "http://gmsmall.gmsweipai.com/gms.mall/#/",
				// 	icon: "icon-shoplight",
				// 	onicon: "icon-shopfill",
				// 	url: true
				// },
				{
					text: "消息",
					name: "msg.list",
					icon: "icon-comment",
					onicon: "icon-commentfill",
					url: false
				}, // 专题列表
				{
					text: "我的",
					name: "user.center",
					icon: "icon-my",
					onicon: "icon-myfill",
					url: false
				}
			]);


		} else {
			// app.toast.m_show_text('当前环境' + _env) ;
		}


		_svc.m_init(); // 视图控制器开始初始化
	});
});
// ------------------ (end) -------------------