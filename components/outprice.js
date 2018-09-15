define(function (require, exports, module) {
	/* 出价 */
	require('./outprice.css');

	function _m_get_float_price(input_price) { //其他场规则
		var _float_price = 0;
		if (input_price < 5000) {
			_float_price = 200;
		} else if (input_price >= 5000 && input_price < 10000) {
			_float_price = 500;
		} else if (input_price >= 10000 && input_price < 50000) {
			_float_price = 1000;
		} else if (input_price >= 50000) {
			// 判断规格
			var _price_string = input_price + '';
			var _thousand = parseInt(_price_string.substring(_price_string.length - 4));
			var _other = parseInt(_price_string.substring(0, _price_string.length - 4) + '0000');
			if (_thousand >= 0 && _thousand < 2000) {
				_float_price = 2000;
			} else if (_thousand >= 2000 && _thousand < 5000) {
				_float_price = 3000;
			} else if (_thousand >= 5000 && _thousand < 8000) {
				_float_price = 3000;
			} else if (_thousand >= 8000 && _thousand < 10000) {
				_float_price = 2000;
			}
		}
		return _float_price;
	}

	/*
		出价检查		
	 */
	function _m_valid(input_price) {
		var _v = true;
		// if (input_price < 50000) {
		// 	var _price_string = input_price + '';
		// 	var _thousand = parseInt(_price_string.substring(_price_string.length - 3));
		// 	var _other = parseInt(_price_string.substring(0, _price_string.length - 3) + '000');
		// 	if (input_price < 5000) {
		// 		if (0 != input_price % 200) {
		// 			_v = false;
		// 		}
		// 	}
		// 	if (input_price >= 5000 && input_price < 10000) {
		// 		if (0 != input_price % 500) {
		// 			_v = false;
		// 		}
		// 	}
		// 	if (input_price >= 10000 && input_price < 50000) {
		// 		if (0 != input_price % 1000) {
		// 			_v = false;
		// 		}
		// 	}
		// } else {
		// 	var _price_string = input_price + '';
		// 	var _thousand = parseInt(_price_string.substring(_price_string.length - 4));
		// 	var _other = parseInt(_price_string.substring(0, _price_string.length - 4) + '0000');
		// 	if ((_thousand != 2000 && _thousand != 5000 && _thousand != 8000 && _thousand != 0)) {
		// 		_v = false;
		// 		// 开始纠正
		// 	}
		// }
		return _v;
	}



	Vue.component("sep-outprice", m_dev_component({ // 出价组件
		props: {
			name: {
				type: String,
				default: 'outprice'
			},
			id: {
				type: Number,
				default: 0
			},
			screening_id: {
				type: Number,
				default: 0
			},
			current_price: {
				type: Number,
				default: 0
			},
			mode: {
				type: String,
				default: null
			},
			auction_state: {
				type: String,
				default: null
			}
		},
		mounted: function () {
			this.m_ready();
		},
		data: function () {
			var _self = this;
			var _api = app.service.outprice[this.mode];
			return {
				params: {
					onready: function () { // 初始化

					}
				},
				pop: {
					params: {
						onhide_before: function () {
							this.params.price = null;
						},
						onhide_after: function () {
							this.params.e_input.blur();
						},
						onready: function () {
							this.params.e_input = $$('.input_price');
						},
						m_submit: function () { // 提交
							var _input_price = _self.pop.params.price; // 得到输入的价格
							var _float_price = _self.pop.params.float_price; // 得到加价幅度
							var _current_price = parseInt(_self.current_price); // 得到当前价格
							var _type = _self.pop.params.type;
							// 提交数据
							// 这边还需要做个正则判断是否是金钱
							// ----------------- 保护数据完整性(start) -------------------
							if (null == _input_price || 0 == _input_price.length) {
								app.toast.m_show_text('无效的金额!');
								SepComponents.button.m_reset($$('.submit'));
								return false;
							}
							_input_price = parseInt(_input_price);

							if (_input_price < _self.current_price) { // 如果出价的价格低于当前价格
								app.toast.m_show_text('输入的价格不能低于等于当前价格!');
								SepComponents.button.m_reset($$('.submit'));
								return false;
							}
							// ----------------- 保护数据完整性(end) -------------------
							var _id = _self.id;
							var _screening_id = _self.screening_id;
							var _auction_state = _self.auction_state;
							var _data = {
								token: app.data.user.token,
								bidType: 1,
								collectionId: _id,
								bidPrice: _input_price,
								screeningId: _screening_id,
								auctionState: _auction_state
							}

							function _m() {
								_api.m_entrust_out_price(_data, function (data) {
									_self.m_hide();
									app.toast.m_show_ok('委托成功');
									if ($.isFunction(_self.params.onok)) {
										_self.params.onok(_self.pop.params.type, _input_price);
									}
									SepComponents.button.m_reset($$('.submit'));
								}, function (err) {
									SepComponents.button.m_reset($$('.submit'));
									app.modal.m_alert('提示', err.errorMessage);
									_self.m_hide();
								});
							}

							if (2 == _self.pop.params.type) { // 点击了委托出价
								//								var _v = _m_valid(_input_price);
								var _v = _m_valid(_input_price);
								if (!_v) {
									app.toast.m_show_text('委托出价请遵循拍卖规则委托');
									SepComponents.button.m_reset($$('.submit'));
								} else {
									_m();
								}
							} else { // 说明是点击了自由出价 和 加一手
								//								var _v = _m_valid(_input_price);
								var _v = _m_valid(_input_price);
								if (!_v) {
									app.toast.m_show_text('委托出价请遵循拍卖规则委托');
									SepComponents.button.m_reset($$('.submit'));
								} else {
									_data.memberId = app.data.user.memberId;
									if (1 == _type) { // 自由
										_data.bidWay = 1;
										if (parseInt(_float_price) + parseInt(_current_price) <= parseInt(_input_price)) {
											_api.m_free_out_price(_data, function (data) {
												_self.m_hide();
												app.toast.m_show_ok('出价成功');
												if ($.isFunction(_self.params.onok)) {
													_self.params.onok(_self.pop.params.type, _input_price);
												}
												SepComponents.button.m_reset($$('.submit'));
											}, function (err) {
												SepComponents.button.m_reset($$('.submit'));
												app.modal.m_alert('提示', err.errorMessage);
												_self.m_hide();
											});
										} else {
											SepComponents.button.m_reset($$('.submit'));
											app.toast.m_show_text('委托出价请遵循拍卖规则委托');
											_self.m_hide();
										}
									} else if (3 == _type) { // 加一手 
										_data.bidWay = 0;
										_api.m_add_out_price(_data, function (data) {
											_self.m_hide();
											app.toast.m_show_ok('出价成功');
											if ($.isFunction(_self.params.onok)) {
												_self.params.onok(_self.pop.params.type, _input_price);
											}
											SepComponents.button.m_reset($$('.submit'));
										}, function (err) {
											SepComponents.button.m_reset($$('.submit'));
											app.modal.m_alert('提示', err.errorMessage);
											_self.m_hide();
										});
									}
									// _api.m_add_out_price(_data, function (data) {
									// 	_self.m_hide();
									// 	app.toast.m_show_ok('出价成功');
									// 	if ($.isFunction(_self.params.onok)) {
									// 		_self.params.onok(_self.pop.params.type, _input_price);
									// 	}
									// 	SepComponents.button.m_reset($$('.submit'));
									// }, function (err) {
									// 	SepComponents.button.m_reset($$('.submit'));
									// 	app.modal.m_alert('提示', err.errorMessage);
									// 	_self.m_hide();
									// });
								}
							}
						},
						price: null,
						title: null,
						desc: null,
						type: null,
						e_input: null,
						float_price: 0,
					}
				},
			}
		},
		methods: {
			m_hide: function () {
				this.pop.m_hide();
			},
			m_input_price: function () { // 限制输入长度
				var _price = new String(this.pop.params.price);
				var _len = 8; // 最大 8 位
				if (_price.length > _len) {
					this.pop.params.price = _price.substring(0, _len);
					return false;
				}
			},
			m_show: function (type) { // 开始出价
				var _api = app.service.outprice[this.mode];
				var _self = this;
				var _current_price = parseInt(this.current_price);
				var _float_price = 0;
				var _float_price_text = '';
				//				var _float_price = _m_get_float_price(_current_price);
				var _float_price = _m_get_float_price(_current_price);
				if (0 == _float_price) {
					_float_price_text = '千位为2、5、8、0';
				} else {
					_float_price_text = _float_price;
				}

				var _desc = '当前价格为{current_price}元, 请以{float_price_text}为基础价格,出价高于当前价格。';
				_desc = _desc.replace('{current_price}', _current_price).replace('{float_price_text}', _float_price_text);
				this.pop.params.desc = _desc;
				this.pop.params.type = type;
				this.pop.params.float_price = _float_price;

				switch (type) {
					case 1:
						{ // 自由出价
							this.pop.params.title = '自由出价';
							break;
						}
					case 2:
						{
							this.pop.params.title = '委托出价';
							break;
						}
					case 3:
						{
							this.pop.params.title = '加一手';
							// 判断当前是否存在出价记录
							// 
							var _price = 0;
							app.service.goods.m_biddetail_list({
								token: app.data.user.token,
								collectionId: this.id,
								screenIngId: this.screening_id
							}, function (data) {
								if (data.bidDetailVos.length) {
									_price = _current_price + _float_price;
								} else {
									_price = _current_price;
								}
								if (_price == 0) { //0元起拍要加价200
									_price = _current_price + _float_price;
								}
								console.log(data)
								_self.pop.params.price = _price;
								_self.pop.params.e_input.attr('readonly', 1);
							}, function (err) {
								app.modal.m_alert('提示', err.errorMessage);
							});
							break;
						}
				}
				// 弹出界面
				this.pop.m_show();

				if (3 != type) {
					this.pop.params.e_input.removeAttr('readonly');
				} else {
					this.pop.params.e_input.attr('readonly', '');
				}

				// this.options.m_hide() ;
				setTimeout(function () {
					_self.pop.params.e_input.trigger('focus');
				}, 150);
				if ($.isFunction(this.params.onready)) {
					this.params.onready.call(this);
				}
			}
		},
		template: heredoc(function () {
			/*
				<sep-pop name = 'pop'>
					<div class = 'outprice'>
						<div class = 'wrap'>
							<a class = 'close icon-close' v-click = 'pop.m_hide'></a>
							<div class = 'title'>
								<em>{{pop.params.title}}</em>
							</div>
							<div class = 'content'>
								<input @input = 'm_input_price' maxlength="8" class = 'input_price' v-model = 'pop.params.price' type = 'number' placeholder = '设置出价金额' />
							</div>
							<div class = 'desc'>
								{{pop.params.desc}}
							</div>
							<sep-button text = '确定' wtext = '提交中...' class = 'submit button' v-click="pop.params.m_submit"></sep-button>
						</div>
					</div>
				</sep-pop>
			*/
		})
	}));

});