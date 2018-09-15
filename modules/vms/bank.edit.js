define(function(require, exports, module) {
    module.exports = function(tpl, view, stc, svc) {
        var _vm = null;
        return new Promise(function(next) {
            seajs.use("regions", function() {
                next();
                view.m_on("init", function() {
                    _vm = view.m_vm({
                        data: {
                            title: "添加银行卡",
                            regions: window.m_get_regions(),
                            bank_list: [],
                            renders: {
                                default: {
                                    model: {
                                        province : '',//当前选择的省份
                                        city : '',//当前选择的城市
                                        district : '',//当前选择的地区
                                        bankId: '',
                                        subbranch: null,
                                        cardCode: null,
                                        cardholder: null
                                    },
                                    ondraw: function() {
                                        return new Promise(function(next, fail) {
                                            next();
                                        });
                                    }
                                }
                            },
                            form: {
                                onsubmit: function(data) {
                                    // 调用接口
                                    data.token = app.data.user.token;
                                    app.service.bank.m_carsave(data, function(data) {
                                        view.m_reset_button('.submit') ;
                                        app.modal.m_alert('提示', '银行卡绑定成功!', function() {
                                            svc.m_put_msg('bank.list', 'save') ;
                                            svc.m_back() ;
                                        }) ;
                                    }, function(err) {
                                        app.toast.m_show_text(err.msg) ;
                                        view.m_reset_button('.submit') ;
                                    }) ;
                                },
                                oninvalid: function(err) {
                                    view.m_reset_button('.submit') ;
                                }
                            }
                        },
                        computed: {
                            citys : function() {
                                var _province = this.m_find_province(this.$model.province) ;
                                if(_province) {
                                    return _province.city ;
                                } else {
                                    return [] ;
                                }
                            },
                            areas : function() {
                                var _city = this.m_find_city(this.$model.province, this.$model.city) ;
                                if(_city) {
                                    return _city.area ;
                                } else {
                                    return [] ;
                                }
                            }
                        },
                        methods: {
                            m_find_province : function(name) { // 查找省份
                                if(null == name) return null ;
                                for(var i = 0; i < this.regions.length; i++) {
                                    var _province = this.regions[i] ;
                                    if(_province.name == name) {
                                        return _province ;
                                    }
                                }
                                return null ;
                            },
                            m_find_city : function(province_name, city_name) { // 查找城市
                                if(!(province_name && city_name)) return null ;
                                var _province = this.m_find_province(province_name) ;
                                var _citys = _province.city ;
                                for(var i = 0; i < _citys.length; i++) {
                                    if(_citys[i].name == city_name) {
                                        return _citys[i] ;
                                    }
                                }
                                return null ;
                            },
                            m_choose_province : function() {
                                _vm.$model.city = '';//当前选择的城市
                                _vm.$model.district = '';//当前选择的地区
                            },
                            m_choose_city : function() {
                                _vm.$model.district = '';//当前选择的地区
                            },
                            m_load_bank_list: function() {
                                app.service.bank.m_list(null, function(data) {
                                    _vm.bank_list = data.bankVoList;
                                });
                            },
                            m_auto_format_card_code: function() { // 自动格式化卡号
                                var _val = this.$model.cardCode;
                                _val = _val.replace(/\s/g, '').replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
                                this.$model.cardCode = _val;
                            }
                        }
                    });
                });
                view.m_on("draw", function() {
                    /* 每当模板渲染时触发 */
                    _vm.m_load_bank_list() ;
                    return _vm.m_refresh() ;
                });

                view.m_on("active", function() {
                    /* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */
                });

                view.m_on("enter", function() {
                    /* 当 view 进入时触发 */
                });

                view.m_on("frozen", function() {
                    /* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */
                });

                view.m_on("leave", function() {
                    /* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
                });
            });
        });


    }
});
