define(function(require, exports, module) {
    module.exports = function(tpl, view, stc, svc) {
        require('../styles/user.withdrawals.css') ;
        var _vm = null;
        view.m_on("init", function() {
            _vm = view.m_vm({
                data: {
                    title: "提现",
                    bank : null,
                    renders : {
                        default : {
                            model : {
                                
                            },
                            ondraw : function() {
                                
                            }
                        }
                    },
                    form : {
                        onsubmit : function(data) {  
                            // 调用接口
                            console.log("保存成功")
                        },
                        oninvalid : function(errs) {

                        }
                    }
                },
                methods: {

                }
            });
        });
        view.m_on("draw", function() {
            /* 每当模板渲染时触发 */
            return _vm.m_refresh();
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

        view.m_on("message", function(ev, msg) {
            /* 当 view 进入后, 从消息队列中获取消息列表, 循环触发 */
            // ev 事件源
            // msg 消息对象 属性: name, params
           switch(msg.name) {
                case "choose.bank" : { // 监视消息名称
                    // ... 
                    var _params = msg.params ;
                    _vm.bank = _params ;
                    break ;
                }
           }
        });
    }
});
