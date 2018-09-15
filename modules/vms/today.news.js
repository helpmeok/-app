define(function (require, exports, module) {
    module.exports = function (tpl, view, stc, svc) {
        var _vm = null;
        require('../styles/today.news.css'); // 载入 css 样式表
        view.m_on("init", function () {
            _vm = view.m_vm({
                data: {
                    title: "头条资讯",
                    loading: '加载更多',
                    isLoad: false,
                    active: true,
                    page_index_l: 1,
                    page_index_r: 1,
                    pageSize: 10,
                    list_l: [],
                    list_r: []
                },
                methods: {
                    m_list: function (typeId) {
                        if (typeId == 52) {
                            var pageIndex = _vm.page_index_l
                        } else {
                            var pageIndex = _vm.page_index_r
                        }
                        _vm.isLoad = true;
                        _vm.loading = '加载中...';
                        app.service.todayNews.m_list({
                            typeId: typeId,
                            startTime: new Date().toLocaleString(),
                            pageSize: _vm.pageSize,
                            pageIndex: pageIndex
                        }, function (data) {
                            if (typeId == 52) {
                                _vm.list_l = _vm.list_l.concat(data.data.newsList)
                            } else {
                                _vm.list_r = _vm.list_r.concat(data.data.newsList)
                            }
                            _vm.isLoad = false;
                            _vm.loading = '加载更多';
                        }, function (err) {
                            console.log(err)
                            _vm.isLoad = false;
                            _vm.loading = '加载更多';
                        })
                    },
                    m_push: function (url) {
                        window.location.href = url
                    },
                    m_topage: function (index) {
                        if (_vm.active) {
                            _vm.page_index_l = _vm.page_index_l + index
                            _vm.m_list(52)
                        } else {
                            _vm.page_index_r = _vm.page_index_r + index
                            _vm.m_list(53)
                        }
                    }
                }
            });
        });
        view.m_on("draw", function () {
            /* 每当模板渲染时触发 */
            _vm.m_list(52);
            _vm.m_list(53);
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