define(function (require, exports, module) {
    module.exports = function (tpl, view, stc, svc) {
        var _vm = null;
        require('../../plugs/md5.min.js');
        require('../styles/user.updatepaypwd.css');
        var _dely = 60;
        view.m_on("init", function () {
            _vm = view.m_vm({
                data: {
                    title: "修改支付密码",
                    model: {},
                    form: {
                        onsubmit: function () {
                            // 调用接口
                            _vm.model.token = app.data.user.token;
                            _vm.model.mobile = app.data.user.mobile;
                            console.log(_vm.model)
                            app.service.user.m_update_password(_vm.model, function (_data) {
                                view.m_reset_button('.submit');
                                app.toast.m_show_text("修改成功");
                                svc.m_back();
                            }, function (err) {
                                console.log(err)
                                view.m_reset_button('.submit');
                                app.toast.m_show_text(err.errorMessage);
                            });
                        },
                        oninvalid: function (errs) { // 无效的时候
                            view.m_reset_button('.submit');
                        }
                    }
                },
                methods: {
                    m_fgpwd: function () {
                        app.toast.m_show_text('请联系经纪人！');
                    }
                }
            });
        });
        view.m_on("draw", function () {
            /* 每当模板渲染时触发 */
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

        view.m_on("leave.back", function () {
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