define(function(require, exports, module) {
	module.exports = function(svc) {



		require('./activity.css') ;
		Vue.component("sep-activity" , m_dev_component({//活动推荐
			props : {
				name : {
					type : String,
					default : 'activity'
				}
			},
			methods : {
				m_hide : function() {
					this.pop.m_hide() ;
				},
				m_once_show : function(args) {
					var _once = app.session.m_get('__activie_once') ;
					if(!_once) {
						this.m_show(args) ;
						app.session.m_set('__activie_once', 1) ;
					}
				},
				m_show : function(args) {
					this.params.info = args ;
					this.pop.m_show() ;
				},
				m_link : function() {
					var _url = this.params.info.url ;
					var _viewname = this.params.info.viewname ;
					if(_url) {
						setTimeout(function() {
							app.util.m_link(_url) ;
						}, 300) ;
						this.m_hide() ;	
					}else if(_viewname) {
						svc.m_push(_viewname)
					}
					this.m_hide() ;
				}
			},
			data : function() {
				return {
					params : {
						info : {

						}
					},
					pop : {

					}
				}
			},
			mounted : function() {
				this.m_ready() ;
			},
			template : heredoc(function() {
				/*
					<sep-pop name = 'pop'>
						<div class = 'activity' >
							<div class = 'wrap'>
								<a class = 'close icon-close' v-click = 'pop.m_hide'></a>
								<div class = 'title'>
									<em>{{params.info.title}}</em>
								</div>
								<div>
									<img :src="params.info.picture_url" alt="" width="100%" >
								</div>
								<div class = 'desc'>
									{{params.info.desc}}
								</div>
								<a class="button default red m" v-click = 'm_link'>
								    去看看
								</a>
							</div>
						</div>
					</sep-pop>
				 */
			})

		}))
	}

}) ;