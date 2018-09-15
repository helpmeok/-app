define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		require('../styles/offer.list.css') ;
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "出价记录",
					offer_list : [],
					// virtual_list : new SepVirtualList({
					// 	counter : 50,
					// 	row : 20
					// }),
					renders : {
						default : {
							model : {
								list : []
							},
							ondraw : function() {
								return new Promise(function(next, fail) {
									var _collection_id = view.query.collection_id ;
									var _screening_id = view.query.screening_id ;
									if(!_collection_id || !_screening_id) {
										next({
											list : []
										}) ;
									} else {
										app.service.goods.m_biddetail_list({
											token :  app.data.user.token,
											collectionId : _collection_id,
											screenIngId : _screening_id
										},function(data) {
											// _vm.virtual_list.m_bind(data.bidDetailVos)
											console.log(data.bidDetailVos)
											next({
												list : data.bidDetailVos
											}) ;
										}, fail) ;
									}
									
								}) ;
							}
						}
					}
				},
				methods : {

				}
			}) ;
		}) ;
		view.m_on("draw", function() {
			/* 每当模板渲染时触发 */
			
			return _vm.m_refresh() ;
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
				case "<name>" : { // 监视消息名称
					// ... 
					break ;
				}
			}
		}) ;
	}
}) ;