define(function (require, exports, module) {
    module.exports = function (tpl, view, stc, svc) {
        var _vm = null;
        require('../styles/user.subordinate.css');
        view.m_on("init", function () {
            _vm = view.m_vm({
                data: {
                    title: "推荐提成奖励",
                    // virtual_list : new SepVirtualList({
                    // 	counter : 50,
                    // 	row : 30
                    // }),
                    url: "",
                    readArr: [],
                    pageIndex: 1,
                    pageSize: 50,
                    memberList: []
                },
                methods: {
                    m_get_date: function () {
                        var model = {
                            token: app.data.user.token,
                            pageSize: _vm.pageSize,
                            pageIndex: _vm.pageIndex
                        }
                        app.service.recommend.m_get_userInfo(model, function (data) {
                            console.log(data)
                            _vm.memberList = data.memberList;
                        }, function (err) {
                            console.log(err)
                            app.toast.m_show_text(err.errorMessage);
                        })
                    },
                    m_timestampToTime: function (timestamp) {
                        var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
                        Y = date.getFullYear() + '-';
                        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                        D = date.getDate() + ' ';
                        h = date.getHours() + ':';
                        m = date.getMinutes()
                        return Y + M + D + h + m;
                    }
                }
            });
        });
        view.m_on("draw", function () {
            /* 每当模板渲染时触发 */
            _vm.m_get_date()
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