+ function () {
	function App() {
		var _app = this;
		var _e_container = null;
		this.ver = window.__cache_ver;
		var _mode = "mobile";
		this.theme_class = null;
		var _svc = null;
		var _hash = null;
		window.___sep_app = this;
		var _once = false;
		this.m_init = function (svc) {
			_svc = svc;
			this.modal = new SepModalSuper(_app.m_get_container());
			this.loader = new SepLoader(_app.m_get_container());
			this.toast = new SepToastSuper(_app.m_get_container());
			if (null == this.theme_class) { // 尚未设置主题
				this.m_set_theme('blue'); // 默认蓝色主题
			} else {

			}
			_svc.m_on('init', function () {
				app.m_get_container().show();
			});
			_svc.m_on("end", function (ev, v) { // 初始化完成
				/* 移除加载效果(start) */
				if (!_once) {
					_once = true;
					var _e_init = $(".initialization");
					if (_e_init.length) {
						setTimeout(function () {
							_e_init.removeClass("on").addClass("off");
							setTimeout(function () {
								_e_init.remove();
							}, _e_init.m_css3_duration());
						}, 300);
					}
				}
				/* 移除加载效果(end) */
			});
			_svc.m_on("end", function (ev, v) {
				setTimeout(function () {
					app.m_get_container().addClass("on"); // 显示界面
				}, 1000)
			});
		}
		this.m_format_json = function (json) {
			return JSON.parse(JSON.stringify(json));
		}

		this.m_get_hash = function () {
			var _hash = window.location.hash.replace('#', '');
			return _hash;
		}

		this.m_set_welcome = function (names) {
			// 先调用首页
			var _name = 'welcome';
			var _key = _name + '.once';
			_svc.m_on("view.active.before", function (ev, v) { // 每当视图激活结束触发
				return new Promise(function (next, fail) {
					if (!app.session.m_get(_key) && names.contains(v.opts.name)) {
						_svc.m_termination();
						_svc.m_dispatch(_name); // 到欢迎页
					} else {
						next();
					}
					app.session.m_set(_key, 1);
				});
			});
		}

		this.data = { // 数据集合
			__base: __base,
			__theme_color: null, // 主题 rgb
			__theme_bg_class: null, // 主题背景
			__theme_fg_class: null // 主题颜色
		};
		this.util = {
			m_load: function (list) {
				return new Promise(function (next) {
					seajs.use(list, next);
				});
			},
			m_convert_image_url: function (fullalias, name) { // 转化 blod URL
				if (-1 == name.indexOf("bold:http")) {
					return fullalias;
				} else {
					return name;
				}
			},
			m_link: function (link) { // 跳转链接
				function _m_go(link) {
					if ('pc' == app.m_device()) {
						window.open(link, "_blank");
					} else {
						window.location.href = link;
					}
				}
				if (link) {
					var _pos = link.indexOf("#");
					if (-1 == _pos) {
						_m_go(link);
					} else {
						var _str = link.substring(_pos);
						var _v = Path.match(_str);
						if (_v) { // 匹配成功
							window.location.href = link;
						} else {
							_m_go(link);
						}
					}
				}
			}
		};

		function Local() {
			this.m_set = function (name, value) {
				localStorage.setItem(name, JSON.stringify(value));
				return this;
			}
			this.m_get = function (name) {
				var _v = localStorage.getItem(name);
				if ("undefined" !== _v) {
					_v = JSON.parse(_v);
				} else {
					_v = null;
				}
				return _v;
			}
			this.m_remove = function (name) {
				localStorage.removeItem(name);
				return this;
			}
		}

		function Session() {
			this.m_set = function (name, value) {
				sessionStorage.setItem(name, JSON.stringify(value));
				return this;
			}
			this.m_get = function (name) {
				var _v = sessionStorage.getItem(name);
				if ("undefined" !== _v) {
					_v = JSON.parse(_v);
				} else {
					_v = null;
				}
				return _v;
			}
			this.m_remove = function (name) {
				sessionStorage.removeItem(name);
				return this;
			}
		}
		this.m_device = function () { // 判断设置
			var _ua = navigator.userAgent.toLowerCase();
			if (/iphone|ipad|ipod/.test(_ua)) {
				return "iOS";
			} else if (/android/.test(_ua)) {
				return "android";
			} else {
				return "pc";
			}
		}
		this.m_get_container = function () {
			return _e_container;
		}
		this.m_set_theme = function (name) { // 设置皮肤
			var _classname = 'theme-' + name;
			_e_container.addClass(_classname);
			app.data.__theme_name = name;
			app.data.__theme_bg_class = 'theme-' + name + '-bg';
			app.data.__theme_fg_class = 'theme-' + name + '-fg';
			var _e_p = $('<p></p>').addClass(app.data.__theme_fg_class);
			_e_p.appendTo(_app.m_get_container());
			app.data.__theme_color = getComputedStyle(_e_p[0], null).color;
			_e_p.remove(); // 删除元素
			this.theme_class = _classname;
			return this;
		}
		this.m_set_container = function (e_container) {
			_e_container = e_container;
			if ("pc" == this.m_device()) { // 如果是 PC 设备的话
				// _e_container.addClass("mini") ;
				this.m_small_screen();
			}
			_e_container.addClass(_mode);
			if ("pc" != _mode) {
				_e_container.addClass(app.m_get_taste()); // 添加体验度	
			}
			return this;
		}
		this.m_clear_screen = function () {
			$(_e_container).removeClass("large-screen").removeClass("small-screen");
			return this;
		}
		this.m_small_screen = function () {
			this.m_clear_screen();
			_e_container.addClass("small-screen");
		}
		this.m_set_screen_width = function (width) { // 设置屏幕宽度
			this.m_clear_screen();
			_e_container.width(width);
		}
		this.m_large_screen = function (onend) {
			this.m_clear_screen();
			_e_container.addClass("large-screen");
			setTimeout(function () {
				if ($.isFunction(onend)) {
					onend();
				}
			}, _e_container.m_css3_duration());
		}
		this.m_get_mode = function () {
			return _mode;
		}
		this.m_get_taste = function () {
			var _device = this.m_device();
			return ("iOS" == _device || "pc" == _device) ? "fluent" : "speed";
		}
		this.m_query = function () { // 拿到地址栏参数
			var _url = window.location.href;
			var _pos = _url.lastIndexOf("?");
			if (-1 != _pos) {
				_url = _url.substring(_pos + 1);
			}
			var _params = _url.split("&");
			var _param = null;
			var _reg = null;
			var _rs = null;
			var _name = null;
			var _value = null;
			var _query = {};
			for (var i = 0; i < _params.length; i++) {
				_param = _params[i].split("=");
				_reg = new RegExp("(^|&)" + _param[0] + "=([^&]*)(&|$)", "i");
				_rs = _url.match(_reg);
				if (null != _rs) {
					_name = _param[0];
					_value = _rs[2];
					_query[_name] = decodeURI(_value);
				}
			}
			return _query;
		}
		this.m_set_mode = function (mode) { // 设置模式
			$(_e_container).removeClass(_mode).addClass(mode);
			_mode = mode;
			return this;
		}
		this.m_set_title = function (title) {
			document.title = title;
			// visibility: hidden;
			var _e_frame = $("<iframe></iframe>").css('visibility', 'hidden').attr("src", window.__sepui_path + "/favicon.png").on("load", function () {
				setTimeout(function () {
					_e_frame.off("load").remove();
				}, 0);
			}).appendTo(_app.m_get_container());
		}
		this.session = new Session();
		this.local = new Local();
		this.m_get_root = function () {
			// var _hash = this.m_get_hash() ;
			// var _symbol = _hash.indexOf("?") ;
			// if(-1 !== _symbol) {
			// 	_hash = _hash.substring(0, _symbol) ;
			// }
			// var _pos = _hash.indexOf(".") ;
			// var _root = null ;
			// if(-1 === _pos) { // 没照到
			// 	_root = _hash.substring(1) ;
			// } else {
			// 	_root = _hash.substring(1, _pos) ;
			// }
			return _svc.settings.root;
		}
	}
	define(function (require, exports, module) {

		seajs.config({
			alias: {
				"regions": __sepui_path + "/library/js/regions.js",
				"templates": __sepui_path + "/library/js/templates.js",
				"src.min.js": __sepui_path + "/library/root/src.min.js",
				"src.min.css": __sepui_path + "/library/root/src.min.css",
				// "src.js": __sepui_path + "/library/bin/src.js",
				// "src.css": __sepui_path + "/library/bin/src.css",
				"init.css": __sepui_path + "/library/css/init.css",
				"tpls.css": __sepui_path + "/library/css/tpls.css",
				'highlight.js': __sepui_path + "/library/js/plugs/highlight/src.js",
				'highlight.css': __sepui_path + "/library/js/plugs/highlight/src.css",
				'charts': __sepui_path + "/library/js/plugs/charts/src.js",
				'swiper.css': __sepui_path + "/library/js/plugs/swiper/src.css",
				'swiper.js': __sepui_path + "/library/js/plugs/swiper/src.js",
				'date.css': __sepui_path + "/library/js/plugs/date/src.css",
				'date.js': __sepui_path + "/library/js/plugs/date/src.js",
				'jq': __sepui_path + "/library/js/jq.js",
				'wx_jssdk': __sepui_path + '/library/js/weixin.js', //微信jssdk
				'qrcode': __sepui_path + '/library/js/qrcode.min.js', //生成二维码库
				'vconsole': __sepui_path + '/library/js/vconsole.min.js', //调试真机console
				'ckplayer': __sepui_path + '/library/js/ckplayer/ckplayer.min.js', //ckplayerjs
			},
			debug: true,
			map: [ // 可配置版本号
				[".css", ".css?v=" + window.__cache_ver],
				[".js", ".js?v=" + window.__cache_ver]
			]
		});
		module.exports = {
			m_init: function (on) {
				// var _requirejs = "undefined" === typeof __requirejs ? null : __requirejs ;
				app = new App();
				app.oncomponents_load = function () { // 组件初始化完成
					if ($.isFunction(on)) {
						on();
					}
				}
				// var _jq_or_zepto = 'pc' == app.m_device() ? 'jq' : 'zepto' ;
				seajs.use(['jq', 'wx_jssdk', 'qrcode', 'ckplayer'], function ($, share, qrcode) {
					if (Object.keys($).length) {
						window.jQuery = window.$ = $;
					}
					window.wx = share;
					window.ckplayer = ckplayer;
					var _files = null;
					// if (window.__debug) {
					// 	_files = ['init.css', "src.css", "src.js"];
					// } else {
					// 	_files = ['init.css', "src.min.css", "src.min.js"];
					// }
					_files = ['init.css', "src.min.css", "src.min.js"];
					seajs.use(_files, function () {
						console.log('sepui load done!');
					});


				});
			}
		};
	});

	function _m_init() {

	}
	_m_init();
}();