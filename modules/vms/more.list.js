define(function (require, exports, module) {
    module.exports = function (tpl, view, stc, svc) {
        require('../styles/more.list.css'); // 载入 css 样式表
        require('../../components/activity.js');
        require('../../components/download.app.js');
        var _vm = null;
        view.m_on("init", function () {
            _vm = view.m_vm({
                data: {
                    title: "直播列表",
                    dates: [],
                    activity: {},
                    date_tab_value: null,
                    current_list: null,
                    preview_show_type: null,
                },
                methods: {
                    m_refresh_preview: function () {
                        this.m_load_list(_vm.date_tab_value);
                    },
                    m_push: function (el) {
                        var _id = el.screeningId;
                        if (2 == el.screeningState || 6 == el.screeningState) {
                            // app.toast.m_show_text('即将开放,敬请期待!') ;
                            var _url = 'goods.auction?id={id}'.replace('{id}', _id);
                            if (app.data.user) {
                                svc.m_push(_url);
                            } else {
                                // 保存ID
                                svc.m_force_put_msg('user.login', 'args', _url);
                                svc.m_push('user.login?source={source}'
                                    .replace('{source}', view.opts.name));
                            }
                        } else {
                            svc.m_push('goods.list?id=' + _id);
                        }
                    },
                    m_load_list: function (start_time) {
                        app.service.home.m_current_liver_list({
                            pageIndex: 1,
                            pageSize: 100,
                            startTime: start_time,
                            titleType: 6
                        }, function (ds) {
                            var _screeningListVos = ds.data.screeningListVos;
                            _vm.current_list = _screeningListVos;
                        }, function (err) {
                            _vm.current_list = [];
                        });
                    },
                    m_list: function () {
                        app.service.home.m_liver_list({
                            pageIndex: 1,
                            pageSize: 10,
                            withDate: 1,
                            titleType: 6
                        }, function (ds) {
                            console.log(ds)
                            var _dates = ds.data.screeningDate;
                            if (_dates.length) {
                                // _dates.shift();
                                _vm.dates = _dates;
                                if (_dates && _dates.length) {
                                    var _first = _dates[0];
                                    var _date = _first.screenDate;
                                    _vm.date_tab_value = _date;
                                    _vm.m_load_list(_date);
                                } else {
                                    _vm.current_list = [];
                                }
                            } else {}
                        }, function (err) {
                            console.log(err)
                        });
                    }
                }
            });
        });
        view.m_on("draw", function () {
            _vm.m_list()
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

        view.m_on('message', function (ev, msg) {

        });

    }
});