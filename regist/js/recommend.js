function size() {
    var html = document.querySelector('html');
    html.style.fontSize = document.body.clientWidth / 7.5 + 'px';
}
size();
window.onresize = size;
setTimeout(function () {
    document.querySelector("body").style.visibility = "visible"
    document.querySelector("html").style.visibility = "visible"
}, 100);
// var __url = 'http://192.168.1.124/regist/regist.html'
var __url = 'http://www.gmsweipai.com/gms.app'

function phoneType() {
    var _ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(_ua)) {
        return "iOS";
    } else if (/android/.test(_ua)) {
        return "android";
    } else {
        return "pc";
    }
}
$('.btn').click(function () {
    if (phoneType() == "iOS") {
        function setupWebViewJavascriptBridge(callback) {
            if (window.WebViewJavascriptBridge) {
                return callback(WebViewJavascriptBridge);
            }
            if (window.WVJBCallbacks) {
                return window.WVJBCallbacks.push(callback);
            }
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'https://__bridge_loaded__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function () {
                document.documentElement.removeChild(WVJBIframe)
            }, 0)
        }
        setupWebViewJavascriptBridge(function (bridge) {
            bridge.callHandler('recommend', __url, function responseCallback(responseData) {

            })
        })
        window.webkit.messageHandlers.recommend.postMessage(__url);
    } else if (phoneType() == "android") {
        window.android.recommend(__url);
    }
})