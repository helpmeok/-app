define(function (require, exports, module) {
	module.exports = function (tpl, view, stc, svc) {
		var _vm = null;
		require('tpls.css');
		require('../styles/user.center.css');
		var _url = null;
		view.m_on("init", function () {
			_vm = view.m_vm({
				data: {
					scroll: {

					},
					name: null,
					title: "我的",
					base_bg: app.data.__theme_bg_class,
					user: null,
					isShow: false,
					cw: "",
					ch: "",
					canvas_image: "",
					isCanvas: false
				},
				methods: {
					m_push: function (url) { // 用户设置
						if (this.user) {
							svc.m_push(url);
						} else {
							_url = url;
							svc.m_force_put_msg('user.login', 'code', '1');
							svc.m_push('user.login?source={source}&location={location}&flag=2'
								.replace('{source}', 'user.center')
								.replace('{location}', 'user.center'));
						}
					},
					m_local: function () {
						if (!!app.data.user) {
							var dw = document.documentElement.clientWidth
							var dh = document.documentElement.clientHeight
							_vm.cw = dw * 0.9
							_vm.ch = dh * 0.7
							if (dh <= 605) {
								_vm.ch = dh * 0.8
							}
							var url = location.href + '?parentMobile=' + app.data.user.mobile
							new QRCode(document.getElementById("qrcode"), url);
							app.service.user.m_account_balance({
								token: app.data.user.token
							}, function (data) {
								data.amount = JSON.parse(data.amount);
								app.data.user.allAmount = data.amount.allAmounts;
								_vm.user = app.data.user;
							}, function (err) {
								app.toast.m_show_no(err.errorMessage)
							});
						}
					},
					m_myqrcode: function () {
						if (_vm.isCanvas) {
							$('.shadow-near').hide()
							_vm.isShow = true
						} else {
							var mainCtx = document.getElementById('canvas')
							var imgSrc = document.querySelector('#qrcode img').src;
							if (mainCtx.getContext) {
								mainCtx = mainCtx.getContext('2d')
								mainCtx.fillStyle = "#fff";
								mainCtx.fillRect(0, 0, _vm.cw * 2, _vm.ch * 2);
								var myqrcode = new Image();
								myqrcode.setAttribute('crossOrigin', 'anonymous'); //解决toDataURL跨域
								myqrcode.src = imgSrc;
								myqrcode.onload = function () {
									var headerImage = new Image();
									headerImage.setAttribute('crossOrigin', 'anonymous'); //解决toDataURL跨域
									headerImage.src = app.data.user.portraitUrl;
									headerImage.onerror = function () { //图片跨域设置为默认头像
										headerImage.src = 'modules/images/logo.png?v=' + Date.now();
										headerImage.onload = function () {
											var mylogo = new Image();
											mylogo.setAttribute('crossOrigin', 'anonymous'); //解决toDataURL跨域
											mylogo.src = 'modules/images/my-logo.png?v=' + Date.now();
											mylogo.onload = function () {
												mainCtx.save();
												mainCtx.arc(20 * 2 + 40 * 2, 20 * 2 + 40 * 2, 40 * 2, 0, 2 * Math.PI);
												mainCtx.clip();
												mainCtx.drawImage(headerImage, 20 * 2, 20 * 2, 80 * 2, 80 * 2);
												mainCtx.restore();
												mainCtx.drawImage(mylogo, 115 * 2, 35 * 2, 130 * 2, 50 * 2);
												mainCtx.drawImage(myqrcode, 40 * 2, 120 * 2, (_vm.cw - 80) * 2, (_vm.cw - 80) * 2);
												mainCtx.drawImage(headerImage, (_vm.cw / 2 - 20) * 2, (100 + (_vm.cw - 80) / 2) * 2, 40 * 2, 40 * 2);
												mainCtx.font = "normal normal  36px sans-serif";
												mainCtx.fillStyle = '#333333'
												mainCtx.textAlign = 'center'
												mainCtx.fillText('在家就能体验的古玩艺术品现场拍卖', (_vm.cw / 2) * 2, (_vm.ch - 20) * 2)
												var mycanvas = document.getElementById("canvas");
												var image = mycanvas.toDataURL("image/jpg");
												_vm.canvas_image = image
												_vm.isCanvas = true;
												$('.shadow-near').hide()
												_vm.isShow = true
											}
										}
									}
									headerImage.onload = function () {
										var mylogo = new Image();
										mylogo.setAttribute('crossOrigin', 'anonymous'); //解决toDataURL跨域
										mylogo.src = 'modules/images/my-logo.png?v=' + Date.now();
										mylogo.onload = function () {
											mainCtx.save();
											mainCtx.arc(20 * 2 + 40 * 2, 20 * 2 + 40 * 2, 40 * 2, 0, 2 * Math.PI);
											mainCtx.clip();
											mainCtx.drawImage(headerImage, 20 * 2, 20 * 2, 80 * 2, 80 * 2);
											mainCtx.restore();
											mainCtx.drawImage(mylogo, 115 * 2, 35 * 2, 130 * 2, 50 * 2);
											mainCtx.drawImage(myqrcode, 40 * 2, 120 * 2, (_vm.cw - 80) * 2, (_vm.cw - 80) * 2);
											mainCtx.drawImage(headerImage, (_vm.cw / 2 - 20) * 2, (100 + (_vm.cw - 80) / 2) * 2, 40 * 2, 40 * 2);
											mainCtx.font = "normal normal  36px sans-serif";
											mainCtx.fillStyle = '#333333'
											mainCtx.textAlign = 'center'
											mainCtx.fillText('在家就能体验的古玩艺术品现场拍卖', (_vm.cw / 2) * 2, (_vm.ch - 20) * 2)
											var mycanvas = document.getElementById("canvas");
											var image = mycanvas.toDataURL("image/jpg");
											_vm.canvas_image = image
											_vm.isCanvas = true;
											$('.shadow-near').hide()
											_vm.isShow = true
										}
									}
								}
							}
						}
					},
					m_close_canvas: function () {
						$('.shadow-near').show()
						_vm.isShow = false
					}
				}
			});
		});
		view.m_on("draw", function () {
			/* 每当模板渲染时触发 */

			_vm.m_local();
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
			var _params = msg.params;
			console.log(msg)
			switch (msg.name) {
				case "save":
					{ // 监视消息名称
						// ... 
						view.m_downpull()
						break;
					}
				case 'user.login':
					{ // 用户登陆成功
						// 开始下拉摔性能
						view.m_downpull().then(function () {
							console.log(app.data.user)
							if ('1' == _params.code) {
								svc.m_push(_url);
							}
						});
						break;
					}
				case 'logout':
					{
						view.m_downpull().then(function () {
							_vm.user = app.data.user;
						});
						break;
					}
			}
		});
	}
});