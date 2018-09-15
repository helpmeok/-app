define(function (require, exports, module) { // 编写业务逻辑功能
	require('plugs/md5.min.js');
	var _req = new SepRequest();
	module.exports = {
		api: {
			qiniu: {
				m_token: function (key, onok, onno) {
					var _url = __api + "/api/common/qiniu/token";
					_req.m_send(_url, "post", {
						key: key
					}, onok, onno);
				}
			},
			wechat: {
				m_config: function (url) {
					var _config = null;
					$.ajax({
						async: false,
						url: 'http://wechat.gmsweipai.com/jssdk/sign/{url}'.replace('{url}', encodeURIComponent(window.location.href.split('#')[0])),
						success: function (ds) {
							_config = ds.data;
						}
					});
					return _config;
				},
				m_get_jssdk_config: function () { //微信Jssdk配置
					$.ajax({
						async: false,
						// url: 'http://gmsmall.gmsweipai.com:9999/gms/api/login/getJsApiTicket',
						url: __api + '/api/member/getJsApiTicket',
						data: {
							url: window.location.href.split('#')[0]
						},
						success: function (ds) {
							var result = ds.data;
							if (!!result) {
								wx.config({
									debug: false,
									appId: result.appId,
									timestamp: result.timestamp,
									nonceStr: result.nonce_str,
									signature: result.signature,
									jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
								});
							}
						},
						error: function (e) {
							console.log(e)
						}
					});

				},
				m_wx_pay: function (d, onok, onno) {
					var _url = __api + "/api/v2/payment/weixin/prepay";
					_req.m_send(_url, "post", d, onok, onno);
				}
			},


		},
		uploader: {
			m_start: function (file, onprogress, onok, onno) {
				function _m_upload(key, file) {
					var _formdata = new FormData();
					module.exports.api.qiniu.m_token(key, function (token) {
						_formdata.append("token", token.uptoken); // 上传令牌
						_formdata.append("key", key); // 设置文件名称
						_formdata.append("file", file); // 设置文件本身
						$.ajax({
							url: "http://upload.qiniu.com/",
							type: "post",
							data: _formdata,
							xhr: function () {
								var _xhr = $.ajaxSettings.xhr();
								if (_xhr.upload) {
									_xhr.upload.addEventListener("progress", function (ev) {
										var _pv = (ev.loaded / ev.total) * 100;
										onprogress(_pv);
									}, false); // 上传进度回调
									_xhr.upload.addEventListener("error", onno);
								}
								return _xhr;
							},
							contentType: false,
							processData: false,
							success: function (data) {
								var _url = __qiniu_base + '/' + data.key;
								onok(file, key, _url);
							},
							error: function (ev) {
								if ($.isFunction(onno)) {
									onno(ev);
								}
							}
						});
					});
				}
				var _file = file;
				var _format = _file.name.substring(_file.name.lastIndexOf(".") + 1);
				var _key = uuid() + "." + _format;
				_m_upload(_key, _file);
			}
		},
		ry: {
			m_login: function (d, onok, onno) { //登录ry聊天室像数据库插入个人信息
				_req.m_send(__api + "/api/rong/chatRoom", "post", d, onok, onno);
			},
			m_loginOut: function (d, onok, onno) {
				_req.m_send(__api + "/api/rong/chatRoom", "post", d, onok, onno);
			}
		},
		rsa: {
			m_encode: function (d, onok, onno) {
				_req.m_send(__api + "/api/common/rsa", "post", d, onok, onno);
			}
		},
		sms: {
			m_get: function (type, mobile, onok, onno) { //获取验证码 设置支付密码
				var _url = __api + '/api/common/{mobile}/request/{type}';
				_url = _url.replace('{mobile}', mobile).replace('{type}', type);
				_req.m_send(_url, 'get', {
					mobile: mobile
				}, onok, onno);
			}
		},
		tel: {
			m_exist: function (d, onok, onno) {
				_req.m_send(__api + "/api/member/exists", "post", d, onok, onno);
			}
		},
		user: {
			m_login: function (d, onok, onno) {
				d = clone(d); // 克隆一份
				var _mobile = d.mobile;
				var _password = md5(d.password);
				_password = md5(_password + _mobile);
				d.password = _password;
				_req.m_send(__api + "/api/v2/member/login", "post", d, onok, onno);
			},
			//我的资料
			m_userdetail: function (d, onok, onno) {
				var _url = __api + "/api/member/{token}/info";
				_url = _url.replace('{token}', d.token);
				_req.m_send(_url, "get", d, onok, onno);
			},
			//我的页面
			m_userinfo: function (d, onok, onno) {
				var _url = __api + "/api/member/token/login";
				_req.m_send(_url, "post", d, onok, onno);
			},
			// 账户金额
			m_account_balance: function (d, onok, onno) {
				_req.m_send(__api + "/api/member/" + d.token + "/balanceDecode", "get", d, onok, onno);
			},
			// 账户明细
			m_account_balance_detail: function (d, onok, onno) {
				var _url = __api + "/api/member/amounts/list?{token}/{type}";
				_url = _url.replace('{token}', d.token).replace('{type}', d.type);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_economic_man: function (d, onok, onno) {
				var _url = __api + "/api/recommend/detail/{memberId}/{recommendAgentId}";
				_url = _url.replace('{memberId}', d.memberId).replace('{recommendAgentId}', d.recommendAgentId);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_set_paypwd: function (d, onok, onno) {
				d = clone(d);
				var _mobile = d.mobile;
				var _amount_pass = md5(d.amountPass);
				d.amountPass = md5(_amount_pass + _mobile);
				d.amountPassConfirm = d.amountPass;
				var _url = __api + "/api/member/set/amountPass";
				_req.m_send(_url, "post", d, onok, onno);
			},
			m_bankcard_unbind: function (d, onok, onno) {
				var _url = __api + "/api/member/unbind/bankCard?token={token}&bankCardId={bankCardId}";
				_url = _url.replace('{token}', d.token).replace('{bankCardId}', d.bankCardId);
				_req.m_send(_url, "delete", d, onok, onno);
			},
			m_personinfo_save: function (d, onok, onno) {
				var _url = __api + "/api/member/alter/info";
				_req.m_send(_url, "post", d, onok, onno);
			},
			m_change_password: function (d, onok, onno) { //修改登录密码
				d = clone(d);
				var _mobile = d.mobile;
				var _oldPassword = md5(d.oldPassword);
				d.oldPassword = md5(_oldPassword + _mobile);
				var _password = md5(d.password);
				var _passwordConfirm = md5(d.passwordConfirm);
				d.password = md5(_password + _mobile);
				d.passwordConfirm = md5(_passwordConfirm + _mobile);
				var _url = __api + "/api/member/alter/password";
				_req.m_send(_url, "post", d, onok, onno);
			},

			m_set_reg_sms_code: function (d, onok, onno) { // 获取验证码 设置支付密码
				var _url = __api + '/api/common/{mobile}/request/{type}?randCode={randCode}&mchCode={mchCode}';
				_url = _url.replace('{mobile}', d.mobile).replace('{type}', d.type).replace('{randCode}', d.randCode).replace('{mchCode}', d.mchCode);
				_req.m_send(_url, 'get', d, onok, onno);
			},

			// m_get_pay_sms_code : function(mobile, onok, onno) { // 获取验证码 设置支付密码
			//     module.exports.sms.m_get(12, mobile, onok, onno) ;
			// },
			m_get_reg_sms_code: function (d, onok, onno) { // 获取注册验证码
				var _url = __api + '/api/common/{mobile}/request/{type}?randCode={randCode}&mchCode={mchCode}';
				_url = _url.replace('{mobile}', d.mobile).replace('{type}', d.type).replace('{randCode}', d.randCode).replace('{mchCode}', d.mchCode);
				console.log(_url)
				_req.m_send(_url, 'get', d, onok, onno);
			},

			m_get_find_sms_code: function (d, onok, onno) { // 找回密码
				var _url = __api + '/api/common/{mobile}/request/{type}?randCode={randCode}&mchCode={mchCode}';
				_url = _url.replace('{mobile}', d.mobile).replace('{type}', d.type).replace('{randCode}', d.randCode).replace('{mchCode}', d.mchCode);
				_req.m_send(_url, 'get', d, onok, onno);
			},

			m_get_findpwd_sms_code: function (mobile, onok, onno) { //获取验证码 找回密码
				module.exports.sms.m_get(2, mobile, onok, onno);
			},
			m_findpwd_one: function (d, onok, onno) {
				d = clone(d);
				var _mobile = d.mobile;
				var _password = md5(d.password);
				d.password = md5(_password + _mobile);
				d.passwordConfirm = d.password;
				var _url = __api + '/api/member/find/password/one';
				_req.m_send(_url, 'post', d, onok, onno);
			},
			m_findpwd_two: function (d, onok, onno) {
				d = clone(d);
				var _mobile = d.mobile;
				var _password = md5(d.password);
				d.password = md5(_password + _mobile);
				d.passwordConfirm = d.password;
				var _url = __api + '/api/member/find/password/two';
				_req.m_send(_url, 'post', d, onok, onno);
			},
			m_set_password: function (d, onok, onno) { //设置支付密码
				// app.service.rsa.m_encode({ //先加密
				// 	token: d.token,
				// 	amountsPass: d.amountsPass,
				// 	amountsPassConfirm: d.amountsPassConfirm,
				// 	smsId: d.smsId,
				// 	smsCode: d.smsCode
				// }, function (data) {
				// 	var _url = __api + '/api/member/set/amountPass';
				// 	_req.m_send(_url, 'post', d, onok, onno);
				// }, function (err) {})
				d = clone(d);
				var _mobile = d.mobile;
				var _amountsPass = md5(d.amountsPass);
				d.amountsPass = md5(_amountsPass + _mobile);
				var _amountsPassConfirm = md5(d.amountsPassConfirm);
				d.amountsPassConfirm = md5(_amountsPassConfirm + _mobile);
				var _url = __api + '/api/member/set/amountPass';
				_req.m_send(_url, 'post', d, onok, onno);
			},
			m_update_password: function (d, onok, onno) { //修改支付密码
				d = clone(d);
				var _mobile = d.mobile;
				var _oldAmountPass = md5(d.oldAmountPass);
				d.oldAmountPass = md5(_oldAmountPass + _mobile);
				var _amountPass = md5(d.amountPass);
				d.amountPass = md5(_amountPass + _mobile);
				var _amountPassConfirm = md5(d.amountPassConfirm);
				d.amountPassConfirm = md5(_amountPassConfirm + _mobile);
				var _url = __api + '/api/member/alter/amountPass';
				_req.m_send(_url, 'post', d, onok, onno);
			},
			m_register: function (d, onok, onno) { // 用户中心-用户注册
				d = clone(d); // 克隆一份
				var _mobile = d.mobile;
				var _password = md5(d.password);
				d.password = md5(_password + _mobile);
				var _passwordConfirm = md5(d.passwordConfirm);
				d.passwordConfirm = md5(_passwordConfirm + _mobile);
				console.log(__api)
				var _url = __api + "/api/member/register";
				_req.m_send(_url, "post", d, onok, onno);
			},
			m_quickreg: function (d, onok, onno) { // 用户中心-快速注册
				var _url = __api + "/api/member/webLogin";
				_req.m_send(_url, "post", d, onok, onno);
			},
			m_get_by_token: function (d, onok, onno) {
				var _url = __api + '/api/v2/member/getByToken';
				_req.m_send(_url, 'get', d, onok, onno);
			},
			m_feed_back: function (d, onok, onno) { //用户中心-问题反馈
				var _url = __api + '/api/member/give/advice';
				_req.m_send(_url, 'put', d, onok, onno);
			},
			m_redpacket: function (d, onok, onno) { //用户中心-我的红包
				var _url = __api + '/api/v2/redPacket/overview';
				_req.m_send(_url, 'post', d, onok, onno);
			},
			m_redpacket_list: function (d, onok, onno) { //用户中心-现场拍卖红包
				var _url = __api + '/api/v2/redPacket/channel/list';
				_req.m_send(_url, 'post', d, onok, onno);
			},
			m_push_ensurePrice: function (d, onok, onno) { //余额转保证金
				var _url = __api + '/api/member/updateMemberMoney';
				_req.m_send(_url, 'post', d, onok, onno);
			},
			m_pull_ensurePrice: function (d, onok, onno) { //保证金余额
				var _url = __api + '/api/member/updateMemberMoneyToBalance';
				_req.m_send(_url, 'post', d, onok, onno);
			},
			m_saveTicket: function (d, onok, onno) { //保存优惠券
				var _url = __api + '/api/ticket/saveTicket/{token}';
				_url = _url.replace('{token}', d.token)
				_req.m_send(_url, 'post', d, onok, onno);
			},
			m_is_useTicket: function (d, onok, onno) { //查询用户是否领用优惠券
				var _url = __api + '/api/ticket/isUse/{token}';
				_url = _url.replace('{token}', d.token)
				_req.m_send(_url, 'get', d, onok, onno);
			},
			m_is_queryTicket: function (d, onok, onno) { //查询用户的优惠券
				var _url = __api + '/api/ticket/queryTicket/{token}';
				_url = _url.replace('{token}', d.token)
				_req.m_send(_url, 'get', d, onok, onno);
			}

		},
		home: {
			m_ad_list: function (d, onok, onno) {
				_req.m_send(__api + "/api/common/advertise/newShow", "get", d, onok, onno);
			},
			m_act_list: function (d, onok, onno) {
				var _url = __api + "/api/v2/exhibition/getScreeningWithDate/{pageIndex}/{pageSize}";
				_url = _url.replace('{pageSize}', d.pageSize).replace('{pageIndex}', d.pageIndex);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_date_list: function (d, onok, onno) { //首页预展---日期列表
				var _url = __api + "/api/v2/exhibition/getScreeningWithDate/{pageIndex}/{pageSize}?withDate={withDate}";
				_url = _url.replace('{pageIndex}', d.pageIndex).replace('{pageSize}', d.pageSize).replace('{withDate}', d.withDate);
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_current_list: function (d, onok, onno) { //预展普通按日期
				var _url = __api + "/api/v2/exhibition/getScreeningWithDate/{pageIndex}/{pageSize}?startTime={startTime}&afterAll={afterAll}";
				_url = _url.replace('{pageIndex}', d.pageIndex).replace('{pageSize}', d.pageSize).replace('{startTime}', d.startTime).replace('{afterAll}', d.afterAll);
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_count_list: function (d, onok, onno) { //首页展示---根据场次第几场
				var _url = __api + "/api/v2/exhibition/getScreeningWithDate/{pageIndex}/{pageSize}?startTime={startTime}&screenNo={screenNo}";
				_url = _url.replace('{pageIndex}', d.pageIndex).replace('{pageSize}', d.pageSize).replace('{startTime}', d.startTime).replace('{screenNo}', d.screenNo)
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_mores: function (d, onok, onno) { //首页预展---更多
				var _url = __api + "/api/v2/exhibition/getScreeningWithDate/{pageIndex}/{pageSize}?startTime={startTime}&afterAll={afterAll}";
				_url = _url.replace('{pageIndex}', d.pageIndex).replace('{pageSize}', d.pageSize).replace('{startTime}', d.startTime).replace('{afterAll}', d.afterAll);
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_liver_list: function (d, onok, onno) { //查看全部直播场次
				var _url = __api + "/api/v2/exhibition/getScreeningWithDate/{pageIndex}/{pageSize}?withDate={withDate}&titleType={titleType}";
				_url = _url.replace('{pageIndex}', d.pageIndex).replace('{pageSize}', d.pageSize).replace('{withDate}', d.withDate).replace('{titleType}', d.titleType);
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_current_liver_list: function (d, onok, onno) { //预展直播按日期
				var _url = __api + "/api/v2/exhibition/getScreeningWithDate/{pageIndex}/{pageSize}?startTime={startTime}&titleType={titleType}";
				_url = _url.replace('{pageIndex}', d.pageIndex).replace('{pageSize}', d.pageSize).replace('{startTime}', d.startTime).replace('{titleType}', d.titleType);
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_push_special: function (d, onok, onno) { //判断能否进入专场 
				var _url = __api + "/api/v2/exhibition/newAuctionDetailCheck/{screeningId}/{token}";
				_url = _url.replace('{screeningId}', d.screeningId).replace('{token}', d.token);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_is_speical: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/getCollectionDetail/{collectionId}/{token}";
				_url = _url.replace('{collectionId}', d.collectionId).replace('{token}', d.token);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_push_millions: function (d, onok, onno) { //判断能否进入百万场
				var _url = __api + "/api/v2/member/check/status/{memberId}"
				_url = _url.replace('{memberId}', d.memberId)
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_millions_postdata: function (d, onok, onno) { //百万场申请
				var _url = __api + "/api/member/check/million"
				_req.m_send(_url, "post", d, onok, onno);
			}
		},
		order: {
			//全部订单
			m_list: function (d, onok, onno) {
				var _url = __api + "/api/order/{token}/list/{state}";
				_url = _url.replace('{token}', d.token).replace('{state}', d.state);
				_req.m_send(_url, "get", d, onok, onno);
			},
			//确认订单
			m_get: function (d, onok, onno) {
				var _url = __api + "/api/v2/order/info";
				// _url = _url.replace('{token}', d.token).replace('{orderId}', d.orderId);
				// console.log(_url)
				_req.m_send(_url, "post", d, onok, onno);
			},
			// 订单详情
			m_detail: function (d, onok, onno) {
				var _url = __api + "/api/order/{token}/{orderId}/detail";
				_url = _url.replace('{token}', d.token).replace('{orderId}', d.orderId);
				_req.m_send(_url, "get", d, onok, onno);
			},
			//订单申请延期
			m_postpone: function (d, onok, onno) {
				var _url = __api + "/api/order/delayApply";
				_req.m_send(_url, "post", d, onok, onno);
			},
			// 获取相关红包信息
			m_get_redPacket: function (d, onok, onno) {
				var _url = __api + "/api/v2/redPacket/overview";
				_req.m_send(_url, "post", d, onok, onno);
			},
			// 获取优惠券
			m_queryTicketGroup: function (d, onok, onno) {
				var _url = __api + "/api/ticket/queryTicketGroup/{token}";
				_url = _url.replace('{token}', d.token)
				_req.m_send(_url, "get", d, onok, onno);
			},
			// 判断是否检验
			m_isverify: function (d, onok, onno) {
				var _url = __api + "/api/member/isRealNameAuthentication";
				_req.m_send(_url, "post", d, onok, onno);
			},
			//生成订单信息
			m_create_order: function (d, onok, onno) {
				var _url = __api + "/api/v2/order/payment";
				_req.m_send(_url, "post", d, onok, onno);
			},
			// 余额支付
			m_balance_pay: function (d, onok, onno) {
				var _url = __api + "/api/v2/payment/balance";
				_req.m_send(_url, "post", d, onok, onno);
			},
			// 微信支付
			m_wx_pay: function (d, onok, onno) {
				var _url = __api + "/api/v2/payment/weixin/prepayWeb";
				_req.m_send(_url, "post", d, onok, onno);
			},
			// 直播送礼物付款
			m_gift_pay: function (d, onok, onno) {
				var _url = __api + "/api/live/sendGift";
				_req.m_send(_url, "post", d, onok, onno);
			}

		},
		exhibition: {
			m_get: function (d, onok, onno) { // 获取场次信息
				var _url = __api + "/api/exhibition/newAuctionDetail/{screeningId}/{token}";
				_url = _url.replace('{screeningId}', d.screeningId).replace('{token}', d.token);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_get_collectionDetail: function (d, onok, onno) { // 获取弹框信息
				var _url = __api + "/api/exhibition/newAuctionDetail/{screeningId}/{token}";
				_url = _url.replace('{screeningId}', d.screeningId).replace('{token}', d.token);
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_create_order: function (d, onok, onno) { //创建订单
				var _url = __api + "/api/order/orderCreate/{screeningId}/{collectionId}/{memberId}";
				_url = _url.replace('{screeningId}', d.screeningId).replace('{collectionId}', d.collectionId).replace('{memberId}', d.memberId);
				_req.m_send(_url, "post", d, onok, onno);
			}
		},
		live: {
			m_get_phone: function (d, onok, onno) {
				var _url = __api + "/api/live/getlive?screenId={screeningId}&collectionId={collectionId}";
				_url = _url.replace('{screeningId}', d.screeningId).replace('{collectionId}', d.collectionId);
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_get_live: function (d, onok, onno) {
				var _url = "http://zapi.csj178.com/api/app/AuctionsInfo/GetDirectSeedings?mobile={mobile}";
				_url = _url.replace('{mobile}', d.mobile)
				_req.m_send(_url, "get", null, onok, onno);
			}
		},
		goods: {
			m_list: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/getExhibition/{screeningId}";
				_url = _url.replace('{screeningId}', d.screeningId);
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_get_bytoken: function (d, onok, onno) { //拍场里获取藏品详情
				var _url = __api + "/api/exhibition/getCollectionDetail/{screenId}/{collectionId}/{token}";
				_url = _url.replace('{screenId}', d.screenId).replace('{collectionId}', d.collectionId).replace('{token}', d.token);
				_req.m_send(_url, "get", null, onok, onno);
			},
			//藏品详情
			m_get: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/getCollectionDetail/{collectionId}";
				_url = _url.replace('{collectionId}', d.collectionId);
				// 怎么处理
				_req.m_send(_url, "get", null, function (data) {
					var _user = app.data.user;
					if (_user) {
						var _params = {
							token: _user.token,
							collectionId: data.collectionId,
							screenIngId: data.screeningId
						}
						app.service.goods.m_biddetail_list(_params, function (ds) {
							if (!ds.bidDetailVos.length) {
								data.copy_currentPrice = 0;
							} else {
								data.copy_currentPrice = parseFloat(data.currentPrice);
							}
							onok(data);
						}, onno);
					} else {
						data.copy_currentPrice = parseFloat(data.currentPrice);
						onok(data);
					}
				}, onno);
			},
			m_get_sync: function (d, onok, onno) { // 同步获取
				var _url = __api + "/api/exhibition/getCollectionDetail/{collectionId}";
				_url = _url.replace('{collectionId}', d.collectionId);
				_req.m_send(_url, "get", null, onok, onno, {
					async: false
				});
			},
			m_commet_list: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/getDiscuss/{collectionId}";
				_url = _url.replace('{collectionId}', d.collectionId);
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_commet_add: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/discuss";
				_req.m_send(_url, "post", d, onok, onno);
			},
			m_get_thum_up: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/thumbUp";
				_req.m_send(_url, "post", d, onok, onno);
			},
			m_get_attention: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/attention";
				_req.m_send(_url, "post", d, onok, onno);
			},
			m_biddetail_list: function (d, onok, onno) { //出价记录
				var _url = __api + "/api/exhibition/getBidDetail/{collectionId}/{screenIngId}";
				_url = _url.replace("{collectionId}", d.collectionId).replace("{screenIngId}", d.screenIngId);
				_req.m_send(_url, "get", d, onok, onno);
			}
		},
		outprice: {
			preview: {
				m_free_out_price: function (d, onok, onno) { // 自由出价
					app.service.rsa.m_encode({ // 先加密
						token: d.token,
						param: d.bidPrice,
						type: 0
					}, function (data) {
						d.bidPrice = data.parameter;
						var _url = __api + "/api/exhibition/previewbidPrice";
						_req.m_send(_url, "post", d, onok, onno);
					});
				},
				m_entrust_out_price: function (d, onok, onno) { // 委托出价
					app.service.rsa.m_encode({ // 先加密
						token: d.token,
						param: d.bidPrice,
						type: 0
					}, function (data) {
						d.topPrice = data.parameter;
						delete d.bidPrice;
						if (d.auctionState == '预展中' || d.auctionState == '正在拍卖') {
							var _url = __api + "/api/entrust/auction/bid/entrust";
							_req.m_send(_url, "post", d, onok, onno);
						} else if (d.auctionState == '未拍卖') {
							var _url = __api + "/api/entrust/auction/entrust";
							_req.m_send(_url, "post", d, onok, onno);
						} else {
							app.toast.m_show_text('很遗憾，该藏品' + d.auctionState)
						}

					});
				},
				m_add_out_price: function (d, onok, onno) { // 加一手
					app.service.rsa.m_encode({
						token: d.token,
						param: d.bidPrice,
						type: 0
					}, function (data) {
						d.bidType = 1;
						d.bidPrice = data.parameter;
						var _url = __api + "/api/exhibition/previewbidPrice";
						_req.m_send(_url, "post", d, onok, onno);
					});
				}
			},
			scene: {
				m_free_out_price: function (d, onok, onno) { // 自由出价
					app.service.rsa.m_encode({
						token: d.token,
						param: d.bidPrice,
						type: 0
					}, function (data) {
						d.bidType = 2;
						d.bidPrice = data.parameter;
						var _url = __api + "/api/exhibition/bidRedis";
						_req.m_send(_url, "post", d, onok, onno);
					});
				},
				m_entrust_out_price: function (d, onok, onno) { // 委托出价
					app.service.rsa.m_encode({ // 先加密
						token: d.token,
						param: d.bidPrice,
						type: 0
					}, function (data) {
						d.topPrice = data.parameter;
						delete d.bidPrice;
						var _url = __api + "/api/entrust/auction/bid/entrust";
						_req.m_send(_url, "post", d, onok, onno);
					});
				},
				m_add_out_price: function (d, onok, onno) { // 加一手
					app.service.rsa.m_encode({
						token: d.token,
						param: d.bidPrice,
						type: 0
					}, function (data) {
						d.bidType = 2;
						d.bidPrice = data.parameter;
						var _url = __api + "/api/exhibition/bidRedis";
						_req.m_send(_url, "post", d, onok, onno);
					});
				}
			}

		},
		todayNews: {
			m_list: function (d, onok, onno) {
				var _url = __api + "/api/v2/exhibition/newsTodayList/new?typeId={typeId}&startTime={startTime}&pageSize={pageSize}&pageIndex={pageIndex}";
				_url = _url.replace('{typeId}', d.typeId).replace('{startTime}', d.startTime).replace('{pageIndex}', d.pageIndex).replace('{pageSize}', d.pageSize);
				_req.m_send(_url, "get", null, onok, onno);
			}
		},
		message: {
			m_list: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/getRongyunMesList/{token}/{pageIndex}/{pageSize}";
				_url = _url.replace('{token}', d.token).replace('{pageIndex}', d.pageIndex).replace('{pageSize}', d.pageSize);
				_req.m_send(_url, "get", d, onok, onno);
			},
			//读取消息
			m_read: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/readMes/{rongyunId}";
				_url = _url.replace('{rongyunId}', d.rongyunId);
				_req.m_send(_url, "get", d, onok, onno);
			},
			//读取委托出价消息判断接口
			m_entrust: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/auctionDetail/{screeningId}/{collectionId}/{token}";
				_url = _url.replace("{screeningId}", d.screeningId).replace("{collectionId}", d.collectionId).replace('{token}', d.token);
				_req.m_send(_url, "get", d, onok, onno);
			}
		},
		follow: {
			m_list: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/getAttentionList";
				_req.m_send(_url, "post", d, onok, onno);
			}
		},
		myprice: {
			m_list: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/getBidCls/{memberId}/{pageSize}/{pageIndex}";
				_url = _url.replace("{memberId}", d.memberId).replace("{pageSize}", d.pageSize).replace('{pageIndex}', d.pageIndex);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_save_list: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/savUsrRdBid";
				_req.m_send(_url, "post", d, onok, onno);
			},
			m_more_price: function (d, onok, onno) {
				var _url = __api + "/api/exhibition/getExBids";
				_req.m_send(_url, "post", d, onok, onno);
			}
		},
		recommend: {
			m_list: function (d, onok, onno) {
				var _url = __api + "/api/member/findMemberDetail?mobile={mobile}&pageIndex={pageIndex}&pageSize={pageSize}";
				_url = _url.replace("{mobile}", d.mobile).replace("{pageIndex}", d.pageIndex).replace('{pageSize}', d.pageSize);
				console.log(_url)
				_req.m_send(_url, "get", null, onok, onno);
			},
			m_get_userInfo: function (d, onok, onno) {
				var _url = __api + "/api/member/findDistributionMemberInfo/{token}/{pageIndex}/{pageSize}";
				_url = _url.replace("{token}", d.token).replace("{pageIndex}", d.pageIndex).replace('{pageSize}', d.pageSize);
				_req.m_send(_url, "get", null, onok, onno);
			}
		},
		bank: {
			m_list: function (d, onok, onno) {
				var _url = __api + "/api/member/list/bank";
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_carlist: function (d, onok, onno) {
				var _url = __api + "/api/member/{token}/list/bankCard";
				_url = _url.replace('{token}', d.token);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_carsave: function (d, onok, onno) {
				app.service.rsa.m_encode({ // 先加密
					token: d.token,
					param: d.cardCode,
					type: 0
				}, function (data) {
					d.cardCode = data.parameter;
					var _url = __api + "/api/member/bind/bankCard";
					_req.m_send(_url, "put", d, onok, onno);
				});
			},
		},
		address: {
			m_list: function (d, onok, onno) {
				var _url = __api + "/api/member/{token}/list/address";
				_url = _url.replace("{token}", d.token);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_add: function (d, onok, onno) {
				var _url = __api + "/api/member/add/address";
				_req.m_send(_url, "put", d, onok, onno);
			},
			m_update: function (d, onok, onno) {
				var _url = __api + "/api/member/alter/address";
				_req.m_send(_url, "put", d, onok, onno);
			},
			m_save: function (d, onok, onno) {
				if (d.addressIdCurrent) { // 更新
					this.m_update(d, onok, onno);
				} else {
					this.m_add(d, onok, onno);
				}
			},
			m_set_default: function (d, onok, onno) {
				var _url = __api + "/api/member/set/defaultAddress";
				_req.m_send(_url, "post", d, onok, onno);
			}
		},
		activity: {
			m_new_order: function (d, onok, onno) {
				var _url = __api + "/api/v2/soap";
				_req.m_send(_url, "post", d, onok, onno);
			},
			m_get: function (onok, onno) {
				var _url = __api + '/api/v2/soap';
				_req.m_send(_url, 'get', null, onok, onno);
			}
		},
		seckill: {
			m_special: function (d, onok, onno) {
				var _url = __api + "/api/v2/activity/seckill";
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_list: function (d, onok, onno) {
				var _url = __api + "/api/v2/activity/seckill/{id}/collection";
				_url = _url.replace('{id}', d.id);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_detail: function (d, onok, onno) {
				var _url = __api + "/api/v2/activity/seckill/{id}/collection/{collection_id}";
				_url = _url.replace('{id}', d.id).replace('{collection_id}', d.collection_id);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_rob: function (d, onok, onno) {
				var _url = __api + "/api/v2/activity/seckill/{id}/collection/{collection_id}/price";
				_url = _url.replace('{id}', d.id).replace('{collection_id}', d.collection_id);
				_req.m_send(_url, "post", d, onok, onno);
			},
			m_captcha: function (d, onok, onno) { // 读取验证码
				var _url = __api + "/api/v2/activity/seckill/{id}/collection/{collection_id}/captcha";
				_url = _url.replace('{id}', d.id).replace('{collection_id}', d.collection_id);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_timeline: function (onok, onno) { // 获取时间
				var _url = __api + "/api/v2/activity/seckill/timeline";
				_req.m_send(_url, "get", null, onok, onno);
			},
		},
		sys: {
			m_get_date: function (onok, onno) { // 获取日期
				var _url = __api + "/api/v2/sys/time/timestamp";
				_req.m_send(_url, "get", null, onok, function () {
					onok({
						data: Date.now()
					})
				});
			}
		},
		search: {
			m_search: function (d, onok, onno) { //秒杀列表 - 搜索
				var _url = __api + "/api/exhibition/seachCollection";
				_req.m_send(_url, "post", d, onok, onno);
			}
		},
		redpackage: {
			m_rob: function (d, onok, onno) {
				var _url = __api + "/api/v2/redPacket/clickRedPack/{redpackageid}/{token}/1";
				_url = _url.replace('{token}', d.token).replace('{redpackageid}', d.redpackageid);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_check: function (d, onok, onno) {
				var _url = __api + "/api/v2/redPacket/clickRedPackOne/{token}/{redpackageid}/1";
				_url = _url.replace('{token}', d.token).replace('{redpackageid}', d.redpackageid);
				_req.m_send(_url, "get", d, onok, onno);
			},
			m_list: function (d, onok, onno) {
				// redPacket/getRedPacketList
				var _url = __api + "/api/redPacket/getRedPacketList/{token}/{redpackageid}/2";
				_url = _url.replace('{token}', d.token).replace('{redpackageid}', d.redpackageid);
				_req.m_send(_url, "get", d, onok, onno);
			}
		},

		tools: {
			list: [{
					text: '（苹果机型）进入聊天室时失败提示？',
					id: 1,
					content: '杀掉app进程（按两下Home键，向上拉掉APP进程），重启登录APP，参考视频',
					video: 'http://7xkvov.com2.z0.glb.qiniucdn.com/EnterChatroomFailure.mp4'
				},
				{
					text: '（苹果和安卓机型）如何清空缓存？',
					id: 2,
					content: 'APP上操作步骤：我的界面--右上角（六角螺母图标）--清除缓存--退出--重新登录。'
				},
				{
					text: '（安卓机型）场次藏品列表图片无显示，加载图片失败？',
					id: 3,
					content: '清除APP缓存，退出重启登录APP，参考第2点。'
				},
				{
					text: '（苹果和安卓机型）聊天室出现多个一样出价的记录？',
					id: 4,
					content: '网络延迟，点聊天室右下角刷新按钮，以最后一次出价为准！',
					pictures: [
						'http://7xkvov.com2.z0.glb.qiniucdn.com/@/data/collection/81075738b7964c4bac71cabd8ab7f6da.PNG'
					]
				}
			],
			m_list: function (d, onok, onno) {
				onok(this.list);
			},
			m_get: function (id, onok, onno) {
				var _item = null;
				for (var i = 0; i < this.list.length; i++) {
					if (this.list[i].id == id) {
						_item = this.list[i];
						break;
						// onok(this.list[i]) ;
					}
				}
				onok(_item);
			}
		}
	};
});