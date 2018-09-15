define(function(require, exports, module) {

	module.exports = {
		m_pay : function(orderid) {
			var _env = this.m_get_env() ;
			if('iOS' == _env) {
				var _data = {
					'method' : 'pay',
					'args' : orderid
				}
				window.webkit.messageHandlers.Native.postMessage(JSON.stringify(_data)) ;
			} else if('android' == _env) {
				window.android.pay(orderid) ;
			}
		},
		m_login : function() { // 用户登陆
			var _env = this.m_get_env() ;
			if('iOS' == _env) {
				var _data = {
					'method' : 'login'
				}
				window.webkit.messageHandlers.Native.postMessage(JSON.stringify(_data)) ;
			} else if('android' == _env) {
				window.android.login() ;
			}
		},
		m_close : function() {
			var _env = this.m_get_env() ;
			if('iOS' == _env) {
				var _data = {
					'method' : 'close'
				}
				window.webkit.messageHandlers.Native.postMessage(JSON.stringify(_data)) ;
			} else if('android' == _env) {
				window.android.close() ;
			}
		},
		m_get_user_token : function() { // 获取用户 token
			var _env = this.m_get_env() ;
			if('iOS' == _env) {
				var _data = {
					'method' : 'getUserToken'
				}
				window.webkit.messageHandlers.Native.postMessage(JSON.stringify(_data)) ;
			} else if('android' == _env) {
				window.android.getUserToken() ;
			}
		},
		m_get_env : function(orderid) { // 获取环境
			if(window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Native) {
				return 'iOS' ;
			} else if(window.android) {
				return 'android' ;
			} else {
				return null ;
			}
		},
		m_share : function(data) {
			var _env = this.m_get_env() ;
			var _data = {
				'method' : 'share',
				'args' : JSON.stringify(data)
			}
			if('iOS' == _env) {
				window.webkit.messageHandlers.Native.postMessage(JSON.stringify(_data)) ;
			} else if('android' == _env) {
				window.android.share(JSON.stringify(_data)) ;
			}
		},
		onUserToken : function(token) { // 存在 token
			
		}
	}

}) ;