define(function (require, exports, module) {
	require('./download.app.css');
	Vue.component('sep-download-app', m_dev_component({
		props: {
			name: {
				type: String,
				default: 'download'
			}
		},
		data: function () {
			return {
				status: 0
			}
		},
		mounted: function () {
			this.m_ready();
			var _once = app.session.m_get('__download_app_once');
			if (!_once) {
				this.m_show();
				app.session.m_set('__download_app_once', 1);
			}
		},
		methods: {
			m_hide: function () {
				this.status = 0;
			},
			m_show: function () {
				this.status = 1;
			},
			m_to: function () {
				// app.util.m_link('http://dwz.cn/4LLLCe');
				if ('iOS' == app.m_device()) { // IOS设备
					window.location = 'https://itunes.apple.com/app/apple-store/id1157454646';
				} else {
					window.location = 'http://sj.qq.com/myapp/detail.htm?apkName=cn.cloudtop.ancientart_android';
				}
			}
		},
		template: heredoc(function () {
			/*
				<div class = 'download-app' v-if = '1 == status'>
					<div class = 'wrap'>
						<div class="layout">
							<ul>
								<li>
									<!-- link(可链接) link-arrow(带箭头链接) -->
									<div class="item">
										<div class="media">
											<img width = '45px' height = '45px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABfFJREFUeNrsXc9rG0cUHm2MTQ1OVVpaEBIotFCQoKSQ0Lin+BL3Fhfq3EN8N7L/AEt/gKX0LlOf3Rx8rHKJc6kTcqgoOFAoVK1UQUuNVRcCDi30fYrWrMXqx8ozO29X74NhZfmHdt8373vzZt6ME2oEXqTSSbqsULtL7Tq1rBIERYPaAbWnN9ut3WE/mBhBRpEu69SSYlNt6FArETEPxyaEiIAnfNPzCIEZ1KndJ2LqQwkhMlZ6ZIhXhOMtS15SEj6e8YPYyR4pCQ8Z2R4Z4hl2SLlGpHQcz5siU/YAu1fOPYS84zZdnohdrONT10PWxRYssJ7oJX4nYgsesQQeclvswCeWOJL88QIIeVvMwIsQ8RBmhAiEEIEQEhHMRPXG5zJpNZvODPz+P4eHQohJ4yeXl9V8Pq/eyue613Hw3+mpenV0ROQ8e3P9/rD7nhAyIQnvr62pd4iIWXo9Ca5cvaoWFhe77TwV/q6mOrWaOqErR3IwdfKEU7YO46U2CxeMaAIg46+9b9Wf1ao6a7aEEFtE+OGYiPltq8jCY6yPsiBNH+1U1ceP9qyQAbx7b1V98vxQfbD2YLoJeY8MkXtcU8kvlq0bAvEmUyp2O8bchDErsoTg4a9VyipLDa85AV5qs5M4NshAL4RMcAXuETJqQ8JCJQRSADLGzSNsAxIGT45lHoJeByngJlHjBHzgl8JGfAhxZWoQGciiOQw5cX9+3gtSzlot1d4ux4OQUTLV3CqxmHtCQMe9+iG1UVCvm81uMhnpGAIdjkrM4PAsjukexyHZ0ilp2cp2NAlxc424AR6S2tyIHiG46VmLGa9JIJ6YyuaNEIKbjZNU+SFryPsdMz1oQ8Ud/essbAmBd3CeFtErywX+hEyDd3i9RHcs0Z4YmpoltbleMgxYZm5uFXl6CMiI2lzVZYE1f7aSpfvmogAM7XVm79o9ZBqh87m1xRD0EptyBR1/dfTSymfrnKnWRsjC4i2rvRRkRLVa0YhkzWYySsCIkPl8TqzJiZC5tHgIM8lKizW5DXsFQkjsMBOXB8mUtqxWrqBgW0cBRGwIsV1IgU1BIlkSQwbjNaNNLxJDCGetptGhLzRalywMzqUmX+3E/kVWhGAuyeQCkumKQQD3PykhugYUGiWrOdVSg/pkVoSYlhPO0DnL7OjsIdz3gHMf8mof9mIP+DRC53NrJeSkNn2EYLivK34Y8ZBpky3dndDh7L5RAE6CYJkYumiXy4HH8tivvvC5/SI4JIZBR1e6j+XQTghuEFl1EFKiWgvc3q5o/5tGZnsn8RL0tp++ujfxZ974vXmpvzFsf+Gg+zVR5WJkthde8kd1J9axo2Fom/SMOXcuT3zWFWKKt6zoeG+vS3J3T4Yn1mBCb1AvDdLbgSBFfu1yxdiRTsYIwfAXm+2DGsaNKd6JShi+SwiRge1k54YZMm0RVN9RxjRfGr3IhZzD5H51oyuGMBaky8b2NhP6jk7WKGwavW/jS7iouUWZaRhLrKgNm2SH7Lg9/k398FG0CQEw8gnj0Jl/T//WtlDkFzfCWJMJhRC4OkjJP64ZXVXE55iQKuRVYZxzEhoh56SsrqoPd6q+nuKVm/6yVDeT76+wx9deibrMpv75XG4gGWGdBASEfgimezJQFM4/QcwIO58KvQzIla/jEPT4Mvf484M1K8mtY+uBIQPIdrlN1yMGvbyzbG3W2mqhHEYtNh++v5NAouC9Ng9Wtl65iIeHPMAQtrakQT5//GyRxfybHDUuR42PmXVrOIzfD3IYvyZy5N9VMILf+or8QxeGJJ3FsOJe9ocIIQIhJGKENMQMvAj5VczAi5C6mIEXIQdiBjboODfbrQ692BdbsMC+O8r6WmzBAqUuIeQlByJd1rFLPDS8ech9aJjYxU7soFa4kBiCHbosiW2skLHUi+UXM3V6E0PgL8VTQiej7h32qj5S9nueIvmJWdT7yQASw37jRSpdpMs6taTYT6tXlIiIh37fTIz6bSIFZKxQu0vtOrWs2DQwGr1R7FMiYnfYD/4vwABLy3NsL0epFgAAAABJRU5ErkJggg==">
										</div>
										<div class="content">
											分享现金、红包等功能,请下载古美术APP!
										</div>
										<div class="other">
											<div class = 'flexbox centeralign'>
												<a class = 'button primary to' v-click = 'm_to'>下载APP</a>
												<a class = 'button close icon-close' v-click = 'm_hide'></a>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			*/
		})
	}));
});