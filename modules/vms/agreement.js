define(function(require, exports, module) {
    module.exports = function(tpl, view, stc, svc) {
        require('../styles/agreement.css'); // 载入 css 样式表
        var _vm = null;
        view.m_on("init", function() {
            _vm = view.m_vm({
                data: {
                    title: '古美术专家协议',
                },
                methods: {
                    m_submit : function() {
                        if('#savant.add' == location.hash) {
                            svc.m_put_msg('savant.add', 'state', 'true') ;
                        }else{
                            svc.m_put_msg('seller.add', 'state', 'true') ;    
                        }
                        svc.m_back() ;
                    }
                }
            }) ;
        });
        view.m_on('refresh', function() {
            // 连接进来
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
    }
});