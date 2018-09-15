define(function(require, exports, module) {
	module.exports = function(view, view, stc, svc) {
		require('../styles/seckill.list.css') ;
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				computed: { // 
				    len: function() {
				    	var _model = this.$model ;
				        if (_model && _model.list && _model.list.length) {
				            return this.$model.list.length;
				        } else {
				            return 0 ;
				        }
				    },
				    style : function() {
				    	if(0 == this.len) {
				    		// return 'top:44px' ;
				    	} else {
				    		return 'margin-top:60px' ;
				    	}
				    }
				},
				data : {
					s : null,
					title : "",
					timers : 0,
					share : {},
					out_timers : {},
					status : null,
					flag : 0,
					image : null,
					// virtual_list : new SepVirtualList({
					// 	counter : 20,
					// 	row : 10
					// }),
					renders : {
						default : {
							model : {
								list : [],
								id : ''
							},
							ondraw : function() {
								return new Promise(function(next, fail) {
									var _id = view.query.id ;
									app.service.seckill.m_list({
										id : _id,
										pageSize : 10,
										pageIndex : 1
									}, function(ds) {
										_vm.status = ds.data.state ;
										if(3 == ds.data.state) { // 倒计时
											var _timers = ds.data.countDown || ds.data.endCountDown ;
											_vm.timers = _timers ;
										}
										if(0 != ds.data.countDown) { // 已开始
											_vm.flag = 0 ;
										} else if(0 != ds.data.endCountDown) {
											_vm.flag = 1 ;
										}
										_vm.title = ds.data.name ;
										_vm.image = ds.data.image ;
										// 获取 10 条
										// 
										// _vm.virtual_list.m_bind(ds.data.list) ;
										next({
											id : _id,
											list : ds.data.list
										}) ;
									}, fail) ;
								})
							}
						}
					}
				},
				methods : {
					m_check_timer : function() { // 开始检查
						// _vm.status = 2 ;
						// if(3 == _vm.status || 4 == _vm.status) {
						// 	view.m_downpull() ; // 下拉刷新	
						// 	return 1 ;
						// }
					},
					m_share : function() {
						app.vm.share.m_show({
							url : window.location.href,
							imgurl : 'http://o86ac3exs.bkt.clouddn.com/seckill.png',
							title : this.title,
							desc : '给您推荐的秒杀专场, 快来看看！！'
						}) ;
					},
					m_push : function(el) {
						svc.m_push('seckill.detail?id=' + this.$model.id + '&collection_id=' + el.entityId) ;
					}
				}

			}) ;
		}) ;
		view.m_on("draw", function() {
			/* 每当模板渲染时触发 */
			setTimeout(function() {
				_vm.s = 1 ;
			}, 1000) ;
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