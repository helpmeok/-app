/*
	系统公共微信模块
*/
define(function (require, exports, module) {
    function Wechat() {
        var _defs = {

        };
        var _settings = null;
        /*
        	模块配置
        */
        this.m_config = function (opts) {
            _settings = $.extend(_defs, opts);
        }
        /* 
        	微信分享
        */
        this.m_share = function (wxdata) {
            app.service.api.wechat.m_get_jssdk_config();
            var friendcallback = function (res) {
                alert("分享成功");
            };
            wx.ready(function () {
                wx.onMenuShareTimeline({
                    title: wxdata.title, 
                    desc: wxdata.desc,
                    link: wxdata.link,
                    imgUrl: wxdata.imgUrl,
                    img_width: 200,
                    img_height: 200,
                    trigger: function (res) {},
                    success: function (res) {
                        friendcallback(res);
                    },
                    cancel: function (res) {},
                    fail: function (res) {
                        alert(JSON.stringify(res));
                    }
                });
            });
            wx.ready(function () {
                wx.onMenuShareAppMessage({
                    title: wxdata.title,
                    desc: wxdata.desc,
                    link: wxdata.link,
                    imgUrl: wxdata.imgUrl,
                    img_width: 200,
                    img_height: 200,
                    trigger: function (res) {},
                    success: function (res) {
                        friendcallback(res);
                    },
                    cancel: function (res) {},
                    fail: function (res) {
                        alert(JSON.stringify(res));
                    }
                });
            });
            wx.ready(function () {
                wx.onMenuShareQQ({
                    title: wxdata.title,
                    desc: wxdata.desc,
                    link: wxdata.link,
                    imgUrl: wxdata.imgUrl,
                    img_width: 200,
                    img_height: 200,
                    trigger: function (res) {},
                    success: function (res) {
                        friendcallback(res);
                    },
                    cancel: function (res) {},
                    fail: function (res) {
                        alert(JSON.stringify(res));
                    }
                });
            });
            wx.ready(function () {
                wx.onMenuShareWeibo({
                    title: wxdata.title,
                    desc: wxdata.desc,
                    link: wxdata.link,
                    imgUrl: wxdata.imgUrl,
                    img_width: 200,
                    img_height: 200,
                    trigger: function (res) {},
                    success: function (res) {
                        friendcallback(res);
                    },
                    cancel: function (res) {},
                    fail: function (res) {
                        alert(JSON.stringify(res));
                    }
                });
            });
            wx.ready(function () {
                wx.onMenuShareQZone({
                    title: wxdata.title,
                    desc: wxdata.desc,
                    link: wxdata.link,
                    imgUrl: wxdata.imgUrl,
                    img_width: 200,
                    img_height: 200,
                    trigger: function (res) {},
                    success: function (res) {
                        friendcallback(res);
                    },
                    cancel: function (res) {},
                    fail: function (res) {
                        alert(JSON.stringify(res));
                    }
                });
            });
        }
        /*
        	隐藏基础菜单
        */
        this.m_hide_basic_menu = function () {

        }
        /*
        	显示基础菜单
        */
        this.m_show_basic_menu = function () {

        }
        /*
        	微信支付
        */
        this.m_pay = function (d, oncancel, onno, onok) {
            if (typeof WeixinJSBridge == "undefined") {
                if (document.addEventListener) {
                    document.addEventListener('WeixinJSBridgeReady',
                        onBridgeReady(d), false);
                } else if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady(d));
                    document
                        .attachEvent('onWeixinJSBridgeReady', onBridgeReady(d));
                }
            } else {
                onBridgeReady(d);
            }

            function onBridgeReady(d) {
                WeixinJSBridge
                    .invoke(
                        'getBrandWCPayRequest', d,
                        function (res) {
                            if (res.err_msg == "get_brand_wcpay_request:cancel")
                                if ($.isFunction(oncancel)) {
                                    oncancel()
                                }
                            if (res.err_msg == "get_brand_wcpay_request:fail")
                                if ($.isFunction(onno)) {
                                    onno()
                                }
                            if (res.err_msg == "get_brand_wcpay_request:ok") {
                                if ($.isFunction(onok)) {
                                    onok()
                                }
                            }
                        });
            }
        }
    }
    module.exports = Wechat; // 模块导出
});