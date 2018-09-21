﻿/*
	sepui guide file ( 引导文件 )
*/
// ------------------ (start) -------------------  
window.__base = 'http://127.0.0.1'; // 基路径 < 可配置 >
// window.__api = 'http://wap.gmsweipai.com/gms'; // api 接口路径 < 可配置 >
window.debug = true; //true为测试环境，false为正式环境
window.__wx_url = 'http://www.gmsweipai.com/gms.app/wxrela.html'
// window.__api = 'http://192.168.1.13:8080/gms'; // api 接口路径 < 可配置 >
window.__api = 'http://192.168.1.192:7777/gms'; // api 接口路径 < 可配置 >
// window.__api = 'http://192.168.1.99:8080/gms'; // api 接口路径 < 可配置 >
// window.__api = 'http://test.gmsweipai.com/gms'; // api 接口路径 < 可配置 >
// window.__api = 'http://192.168.1.136:8080/gms'; // api 接口路径 < 可配置 >
// window.__admin = "http://192.168.1.192:8080/gms" ; 
// window.__cache_ver = '16.22' ; // 缓存版本 < 可配置 >
window.__cache_ver = Date.now(); // 缓存版本 < 可配置 >
window.__sepui_path = 'http://192.168.1.152:80/gms.app/sepui'; //sepui 的远程路径 < 可配置 >
// window.__sepui_path = 'http://www.gmsweipai.com/gms.app/sepui'; //sepui 的线上路径 < 可配置 >	
window.__image_base = ''; // 图片基址 < 可配置 >
window.__qiniu_base = 'http://7xkvov.com2.z0.glb.qiniucdn.com'; // 七牛的基路径
window.__copyright = {
	logo: 'data:image/png;base64,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',
	name: '技术支持 古美术'
}
window.__jses = { // 第三方 js

};;

function _m_is_weixin() { //判断浏览器
	var _ua = window.navigator.userAgent.toLowerCase();
	if (_ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}
if (window.debug) {
	require()
} else {
	if (_m_is_weixin()) {
		document.querySelector("body").style.visibility = "hidden"
		document.querySelector("html").style.visibility = "hidden"
		if (sessionStorage.getItem('wxCode')) {
			document.querySelector("body").style.visibility = "visible"
			document.querySelector("html").style.visibility = "visible"
			require()
			sessionStorage.removeItem('wxCode')
		} else {
			window.location.href =
				'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxcafec248aa195a46&redirect_uri=' +
				encodeURIComponent(window.__wx_url) +
				'&response_type=code&scope=snsapi_userinfo&state=' + encodeURIComponent(window.location.hash) + '#wechat_redirect'
		}
	} else {
		require()
	}
}

function require() {
	(function (onload) {
		var _e = document.createElement("script");
		_e.src = __sepui_path + "/library/js/sea.js"; // 使用 seajs 模块化加载
		document.getElementsByTagName("head")[0].appendChild(_e);
		_e.onload = onload;
	})(function () {
		// 
		var _sepui_url = __sepui_path + "/guide.js?v=" + window.__cache_ver;
		seajs.use([_sepui_url], function (guide) { // 使用sepui的引导文件 < 无需配置 >
			guide.m_init(function () {
				seajs.use(["./service.js"], function (service, wx) { // < 可配置 >
					app.service = service;
					seajs.use("./main.js"); // < 可配置 >
				});
			});
		});
	});
}

// ------------------ (end) -------------------