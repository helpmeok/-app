define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		require("../styles/msg.list.css") ;
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "消息",
					page_size : 10,
					scroll : {},
					page_counter : 0,
					page_index : 1,
					renders : {
						default : {
							model : {
								list : []
							},
							ondraw : function() {
								return _vm.m_append(-1) ;
							}
						}
					}
				},
				methods : {
					// 处理 读取委托出价消息判断接口 逻辑
					m_process_msg_dipute : function(el) {
						var _screening_id = el.areaId ;
						var _collection_id = el.collectionId ;
						app.service.message.m_entrust({
							screeningId : el.areaId,
							collectionId : el.collectionId,
							token : app.data.user.token
						}, function(data) {
							var _screen_state = data.auctionCollections.screenState ;
							var _screening_id = data.screeningId ;
							var _collection_id = data.collectionId ;
							var _error_code = data.errorCode ;
							if('1' == _screen_state || '3' == _screen_state) {
								var _url = 'goods.detail?id=' + _collection_id + '&screeningId=' + _screening_id ;
								svc.m_push(_url) ;
							} else {
								var _url = 'goods.auction?id={id}' ;
								_url = _url.replace("{id}", _screening_id) ;
								svc.m_push(_url) ;
							}
						}, function(err) {
							if(0 != err.errorCode) {
								app.modal.m_alert('提示', err.errorMessage, function() {
									var _url = 'goods.detail?id=' + _collection_id + '&screeningId=' + _screening_id ;
									svc.m_push(_url) ;
								}) ;
							}
						}) ;
					},
					//处理竞拍成功消息判断
					m_process_msg_detail : function(el) { 
						var _orderid = el.orderId ;
						app.service.order.m_get({
							token : app.data.user.token,
							orderId : _orderid
						}, function(data) {
							var _order_type = data.orderStateType ;
							var _screening_id = data.orderId ;
							var _collection_id = data.collectionVo.collectionId ;
							if('1' == _order_type) {
								var _url = 'order.confirm?screeningId=' + _screening_id + '&collectionId=' + _collection_id ;
								svc.m_push(_url) ;
							} else {
								var _url = 'order.detail?id=' + _orderid ;
								svc.m_push(_url) ;
							}
						}, function(err) {
							// 继续处理
							if('29001' == err.errorCode) {
								app.service.order.m_detail({
									token : app.data.user.token,
									orderId : el.orderId 
								}, function(data) {
										var _order_type = data.orderDetailVo.orderStateType ;
										var _orderid = data.orderDetailVo.orderId ;
										if('2' == _order_type || '3' == _order_type || '12' == _order_type) {
											var _url = 'order.detail?id=' + _orderid ;
											svc.m_push(_url) ;
										} else {
											var _url = 'order.confirm' ;
											svc.m_push(_url) ;
										}
									}, function(err) {
										app.toast.m_show_text(err.errorMessage) ;
									}) ;
								}
							})
					},
					// 订单超时取消
					m_process_msg_overtime : function(el) {
						var _orderid = el.orderId ;
						app.service.order.m_detail({
							token : app.data.user.token,
							orderId : _orderid
						}, function(data) {
							var _order_type = data.orderDetailVo.orderStateType ;
							var _orderid = data.orderDetailVo.orderId ;
							if('12' == _order_type) {
								var _url = 'order.detail?id=' + _orderid ;
								svc.m_push(_url) ;
								return ;
							} 
						}, function(err) {
							app.modal.m_alert('提示', err.errorMessage) ;
						}) ;
					},
					// 主持人@消息
					m_process_msg_warnMsg : function(el) {
						var _collection_id = el.collectionId ;
						app.service.goods.m_get({
							token : app.data.user.token,
							collectionId : _collection_id
						}, function(data) {
							console.log(data) ;
							var _screening_state = data.screeningState ;
							var _screening_id = data.screeningId ;
							if("2-正在拍卖" == _screening_state) {
								var _url = 'goods.auction?id=' + _screening_id ;
								svc.m_push(_url) ;
							}
						}, function(err) {
							app.modal.m_alert('提示', err.errorMessage) ;
						})
					},
					//预展最高出价
					m_process_msg_msgPreHighest : function(el) {
						var _collection_id = el.collectionId ;
						var _screening_id = el.areaId ;
						app.service.goods.m_get({
							token : app.data.user.token,
							collectionId : _collection_id
						}, function(data) {
							var _screening_state = data.screeningState ;
							var _screening_id = data.screeningId ;
							if("2-正在拍卖" == _screening_state) {
								var _url = 'goods.auction?id=' + _screening_id ;
								svc.m_push(_url) ;
							} else {
								var _url = 'goods.detail?id=' + _collection_id + '&screeningId=' + _screening_id ;
								svc.m_push(_url) ;
							}
						}, function(err) {
							app.modal.m_alert('提示', err.errorMessage) ;
						}) ;
					},
					m_append : function(type) {
						return new Promise(function(next, fail) {
							app.service.message.m_list({
								token : app.data.user.token,
								pageIndex : _vm.page_index,
								pageSize :  _vm.page_size
							}, function(data) {
								_vm.page_counter = parseInt((data.totalCount + _vm.page_size - 1) / _vm.page_size) ;
								var _list = data.rongyunMesList ;
								var _item = null ;
								for(var i = 0; i < _list.length; i++) {
									_item = _list[i] ;
									_item.attach_json = JSON.parse(_item.content) ;
								}
								if(-1 == type) {
									next({
										list : _list
									}) ;
								} else if(_list.length) {
									_vm.$model.list.attach_list(_list) ;
									next() ;
								}
							}, fail) ;
						}) ;
					},
					m_looked : function(el) {
						// 请求服务器
						app.service.message.m_read({
							token : app.data.user.token,
							rongyunId : el.rongyunMesId 
						}, function(data) {
							el.looked = true ;
							var _extra = el.extra ;
							switch(_extra) {
								//其他未定义的消息类型无跳转
								case "msgOther" : {
									break ;	
								}
								
								//提现无跳转
								case "msgWithdraw" : {
									break ;	
								}
								
								//订单发货提醒无跳转
								case "msgOrderSend" : {
									break ;	
								}
								
								//订单取消无跳转  
								case "msgOrderCancle" : {
									break ;	
								}
								
								//委托出价消息(判断字段是否跳转拍卖现场或藏品详情)
								case "msgDipute" : {
									_vm.m_process_msg_dipute(el.attach_json) ;	
									break ;
								}

								//竞拍成功消息判断 、订单支付提醒
								case "msgBidsuccess" : {
									_vm.m_process_msg_detail(el.attach_json) ;
									break ;
								}

								//订单超时取消
								case "overtime" : {
									_vm.m_process_msg_overtime(el.attach_json) ;
									break;
								}

								//主持人@消息，判断是否竞拍中，否则不跳转
								case "warnMsg" : {
									_vm.m_process_msg_warnMsg(el.attach_json) ;
									break ;
								}
								//预展出价最高，判断藏品是否竞拍中还是结束状态
								case "msgPreHighest" : {
									_vm.m_process_msg_msgPreHighest(el.attach_json) ;
									break ;
								}
								//关注消息跳转
								case "msgConcern" : {
									_vm.m_process_msg_msgPreHighest(el.attach_json) ;
									break ;
								}
							}
						}, function(err) {
							app.toast.m_show_text(err.errorMessage) ;
						}) ;
					},
					m_topage : function(index) {
						_vm.page_index = index ;
						_vm.m_refresh().then(function() {
							_vm.scroll.m_scroll_to_top() ;
						}) ;
					}
				}
			}) ;
		}) ;


		view.m_on("draw", function() {
			return _vm.m_refresh() ;
		}) ;

		view.m_on('append', function(ev, type) { // 追加数据
			// 开始追加数据
			_vm.page_index ++ ;
		}) ;

		view.m_on("active", function() {
			/* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */	
		}) ;

		view.m_on("enter", function() {
			/* 当 view 进入时触发 */	
		}) ;

		view.m_on("frozen", function() {
			/* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */	
		}) ;

		view.m_on("leave", function() {
			/* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
		}) ;

		view.m_on("message", function(ev, msg) {
			/* 当 view 进入后, 从消息队列中获取消息列表, 循环触发 */
			// ev 事件源
			// msg 消息对象 属性: name, params
			switch(msg.name) {
				case "user.login" : { // 监视消息名称
					view.m_downpull() ;
					break ;
				}
			}
		}) ;
	}
}) ;