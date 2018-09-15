define(function (require, exports, module) {
    module.exports = function (tpl, view, stc, svc) {
        require("../styles/check.member.css")
        var _vm = null;
        view.m_on("init", function () {
            _vm = view.m_vm({
                data: {
                    title: "百万场申请",
                    model: {
                        name: null,
                        mobile: null,
                    },
                    form: {
                        onpassed: function () {

                        },
                        onsubmit: function () {
                            app.service.home.m_millions_postdata(_vm.model, function (data) {
                                view.m_reset_button('.submit');
                                app.modal.m_alert('提示', '申请成功，请等待审核！',function () {
                                    svc.m_back()
                                });
                            }, function (err) {
                                view.m_reset_button('.submit');
                                app.modal.m_alert('提示', err.errorMessage);
                            })
                        },
                        oninvalid: function () {

                            view.m_reset_button('.submit');
                        }
                    }
                },
                methods: {

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