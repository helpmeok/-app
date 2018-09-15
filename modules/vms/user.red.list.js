define(function(require, exports, module) {
	module.exports = function(tpl, view, stc, svc) {
		var _vm = null ;
		view.m_on("init", function() {
			_vm = view.m_vm({
				data : {
					title : "抢红包", 
					text : "暂无红包" ,
					renders : {
						default : {
							model : {
								list : [],
							},
							ondraw : function() {
								return new Promise(function(next, fail) {
									var _type =  view.query.type ;
									app.service.user.m_redpacket_list({
										token : app.data.user.token ,
										type: _type ,
										pageIndex:1,
										pageSize:10
									}, function(ds) {
										next({
											list : ds.data
										}) ;
									}, fail)
								}) ;
							}
						}
					},
				},
				methods : {
					m_each : function() {
						var _type =  view.query.type ;
						switch(parseInt(_type)) {
							case 3 :
								this.title = "抢红包" ;
								this.text = "暂无红包" ;
							 	break;
							case 8 :
								this.title = "推荐红包"	;
								this.text = "什么都没有哦" ;
							 	break;
							case 9 :
								this.title = "提成红包"	;
								this.text = "什么都没有哦" ;
							 	break;
							case 11 :
								this.title = "红包消费明细"	;
								this.text = "暂无消费明细" ;
							 	break;	
						}
					}
				}
			}) ;
		}) ;
		view.m_on("draw", function() {
			/* 每当模板渲染时触发 */
			_vm.m_each()
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