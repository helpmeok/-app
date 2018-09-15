    var shareData = {};
    shareData.imgUrl = './modules/images/logo1.png';
    shareData.link = window.location.href;
    shareData.content = '';
    shareData.title = document.getElementsByClassName('.wx_title').text;
    console.log(document.getElementsByClassName('.wx_title').text)
    Share(shareData);

    function Share(shareData) {

        var data = {};
        var wxdata = {};
        // data.method = "GetConfig";
        data.url = window.location.href.split('#')[0];
        //这里是ajax向后台请求签名，appid等的方法  
        $.ajax({
            async: false,
            url: __api + '/api/login/getJsApiTicket',
            data: {
                url: window.location.href.split('#')[0]
            },
            success: function (ds) {
                var result = ds.data;
                console.log(result)
                if (result != null) {
                    wx.config({
                        debug: false,
                        appId: result.appId,
                        timestamp: result.timestamp,
                        nonceStr: result.nonceStr,
                        signature: result.signature,
                        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
                    });
                }
            }
        });
        wxdata.imgUrl = shareData.imgUrl;
        wxdata.link = shareData.link;
        var content = shareData.content;
        // content = delHtmlTag(content);
        if (content.length > 100) {
            wxdata.desc = content.substring(0, 100);
        } else {
            wxdata.desc = content;
        }
        wxdata.title = shareData.title;


        var friendcallback = function (res) {
            // alert("分享成功");
        };
        wx.ready(function () {
            console.log('执行了')
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