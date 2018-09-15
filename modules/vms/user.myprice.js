define(function (require, exports, module) {
    module.exports = function (tpl, view, stc, svc) {
        var _vm = null;
        require('../styles/user.myprice.css');
        view.m_on("init", function () {
            _vm = view.m_vm({
                data: {
                    title: "我的出价",
                    // virtual_list : new SepVirtualList({
                    // 	counter : 50,
                    // 	row : 30
                    // }),
                    url: "",
                    readArr: [],
                    pageIndex: 1,
                    pageSize: 30,
                    loading: true,
                    renders: {
                        default: {
                            model: {
                                list: []
                            },
                            ondraw: function () {
                                return new Promise(function (next, fail) {
                                    var _param = {
                                        memberId: app.data.user.memberId,
                                        pageSize: _vm.pageSize,
                                        pageIndex: _vm.pageIndex
                                    };
                                    app.service.myprice.m_list(_param, function (data) {
                                        function _m_get_float_price(current_price) {
                                            var _float_price = 0;
                                            if (current_price < 5000) {
                                                _float_price = 200;
                                            } else if (current_price >= 5000 && current_price < 10000) {
                                                _float_price = 500;
                                            } else if (current_price >= 10000 && current_price < 50000) {
                                                _float_price = 1000;
                                            } else if (current_price >= 50000) {
                                                _float_price = '2、5、8、0'
                                            }
                                            return _float_price;
                                        }
                                        _vm.readArr = []
                                        for (let i = 0; i < data.bidColletionsByDateVos.length; i++) {
                                            const element1 = data.bidColletionsByDateVos[i];
                                            _vm.readArr.push(element1.bidCollectionVos[0].readed)
                                            for (let z = 0; z < element1.bidCollectionVos.length; z++) {
                                                const element2 = element1.bidCollectionVos[z];
                                                element2.isSpread = false
                                                if (element2.exUsrBidDetialVos.length >= 3) {
                                                    element2.isMorePrice = true
                                                } else {
                                                    element2.isMorePrice = false
                                                }
                                                element2.floatPrice = _m_get_float_price(element2.startPrice)
                                            }
                                        }
                                        next({
                                            list: data.bidColletionsByDateVos
                                        });
                                    }, fail);
                                });
                            }
                        }
                    }
                },

                methods: {
                    m_spread_price: function (obj) {
                        obj.item.isSpread = !obj.item.isSpread
                        var _param = {
                            memberId: app.data.user.memberId,
                            screenCollectionId: obj.item.screenCollectionId,
                            bidId: obj.item.lastBidId
                        };
                        app.service.myprice.m_save_list(_param, function (data) {
                            _vm.renders.default.ondraw()
                        }, function (err) {
                            app.modal.m_alert('提示', err.errorMessage);
                        })
                    },
                    m_push: function (el) {
                        var _url = 'goods.detail?id=' + el.collectionId + '&screeningId=' + el.screenCollectionId
                        svc.m_push(_url);
                    },
                    m_more_price: function (item) {
                        console.log(item)
                        var _url = 'user.moreprice?bidTime=' + item.bidTimeValue + '&screenCollectionId=' + item.screenCollectionId
                        svc.m_push(_url);
                    }
                }
            });
        });
        view.m_on("draw", function () {
            /* 每当模板渲染时触发 */
            return _vm.m_refresh();
        });

        view.m_on("active", function () {
            /* 当 view 激活时触发(在 enter 事件之前, 简单点说如果有过度动画, 将会在过度之前触发) */
        });

        view.m_on("enter", function () {
            /* 当 view 进入时触发 */
        });

        view.m_on("frozen", function () {
            /* 当 view 失效时触发 (如果有过度动画, 将会在过度之前触发) */
        });

        view.m_on("leave", function () {
            /* 当 view 离开时触发 (如果有过度动画, 将会在过度之后触发) */
        });

        view.m_on("message", function (ev, msg) {
            /* 当 view 进入后, 从消息队列中获取消息列表, 循环触发 */
            // ev 事件源
            // msg 消息对象 属性: name, params
            switch (msg.name) {
                case "<name>":
                    { // 监视消息名称
                        // ... 
                        break;
                    }
            }
        });
    }
});