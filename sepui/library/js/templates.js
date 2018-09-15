define(function(require, exports, module) {

	module.exports = {
		loader : heredoc(function() {
            /*
                <div class = "lively-loader">
                    <div class = "mask ev-prevent"></div>
                    <div class = "box ev-prevent">
                        <div class = "icons-jump on"></div>
                        <div class = "reflections on"></div>
                    </div>
                </div>
            */
        }),
        radios : heredoc(function() {
            /*
                <div class = 'radios'>
                    <slot></slot>
                </div>
            */
        }),
        virtual_list : heredoc(function() {
            /*
                <div class = 'virtual-list'>
                    <slot></slot>
                </div>
            */
        }),
        items : heredoc(function() {
            /*
                <div class = 'items'>
                    <slot></slot>
                </div>
            */
        }),
        checkboxs : heredoc(function() {
            /*
                <div class = 'checkboxs'>
                    <slot></slot>
                </div>
            */
        }),
        file : heredoc(function() {
           /*
                <div class = 'file'>
                    <input :accept = 'accept' v-if = '1 == mode' type = 'file' @change = 'm_choose' />
                    <input :accept = 'accept' v-if = '2 == mode' multiple = 'multiple' type = 'file' @change = 'm_choose' />
                </div>
            */
        }),
        sortlist : heredoc(function() {
            /*
                <div v-click = "m_me" class = "sortlist">
                    <slot></slot>
                </div>
            */
        }),
        table : heredoc(function() {
            /*
                <div class = 'table'>
                    <slot></slot>
                </div>
            */
        }),
        tfooter : heredoc(function() {
            /*
                <div class = 'tfooter'>
                    <div class = 'wrap'>
                        <div class = 'l'>
                            <i class = 'icon-check fg-lightgreen'></i> 共查询到 <b>{{params.rows}}</b> 条记录
                            <em>
                                {{params.index}} / {{params.total}}
                            </em>
                        </div>
                        <div class = 'c'>
                            
                        </div>
                        <div class = 'r'>
                            <a class = 'button' :class = '{on : 1 == params.index}' v-click = '{method : m_to, args : 1}'>
                                首页
                                <b></b>
                            </a>
                            <a class = 'button' v-click = '{method : m_to, args : params.index - 1}'>
                                上一页
                                <b></b>
                            </a>
                            <a class = 'button' v-click = '{method : m_to, args : params.index + 1}'>
                                下一页
                                <b></b>
                            </a>
                            <a class = 'button' :class = '{on : params.total == params.index}' v-click = '{method : m_to, args : params.total}'>
                                尾页
                                <b></b>
                            </a>
                            <em>每页显示</em>
                            <select @change = 'm_set_size' v-model = 'params.size'>
                                <option value = '10'>10条</option>
                                <option value = '20'>20条</option>
                                <option value = '30'>30条</option>
                                <option value = '50'>50条</option>
                                <option value = '100'>100条</option>
                            </select>
                        </div>
                    </div>
                </div>
            */
        }),
        tbody : heredoc(function() {
            /*
                <sep-scroll class = 'tbody'>
                    <slot></slot>
                </sep-scroll>
            */
        }),
        sortitem : heredoc(function() {
            /*
                <div class = "__sort_item__">
                   <span class = "index"></span>
                </div>
            */
        }),
        images : heredoc(function() {
            /*  
                <sep-sortlist scope = "parent" :scope_object = 'scope_object'>
                    <div class = "images">
                        <div class = "wrap">
                            <ul>
                                <li v-for = "(el, index) in value">
                                    <a v-click = "{method : m_remove, args : index}" class = "button remove icon-close"></a>
                                    <div class = "button item">
                                        <sep-image :src = "el"></sep-image>
                                        <sep-file :scope_object = "scope_object" accept = "image/*" v-model = "value[index]"></sep-file>
                                    </div>
                                </li>
                            </ul>
                            <a class = "button add">
                                <p>添加</p>
                                细节图
                                <sep-file :scope_object = "scope_object" accept = "image/*" v-model = "value"></sep-file>
                            </a>
                        </div>
                    </div>
                </sep-sortlist>
            */
        }),
        options : heredoc(function() {
            /*  
                <sep-actionsheet class = "options">
                    <em v-if = "title">{{title}}</em>
                    <slot></slot>
                </sep-actionsheet>
                
            */ 
        }),
        fold : heredoc(function() {
            /*
                <div class = "fold">
                    <div class = "wrap">
                        <slot></slot>
                    </div>
                </div>
            */        
        }),
        date_picker : heredoc(function() {
            /*
                <div class = 'date-picker'>
                    <input readonly = 'readonly' type = 'text' :value = "value | date(format)" :placeholder = 'tip' />
                </div>
            */
        }),
        modal : heredoc(function() {
            /*
                <div class = "modal">
                    <div class = "wrap">
                        <div class = "mask ev-prevent">

                        </div>
                        <div class = "box ev-prevent">
                            <div class = "title">
                                
                            </div>
                            <div class = "content">
                                
                            </div>
                            <div class = "buttons">
                                
                            </div>
                        </div>
                    </div>
                </div>
            */
        }),
        text_scroll : heredoc(function() {
            /*
                <div class = "text-scroll">
                    <div class = "wrap">
                        <i v-if = "icon" :class = "icon"></i><em>{{text}}</em>
                    </div>
                </div>
            */
        }),
        dev : heredoc(function() {
            /*
                <div class = "dev">
                    <div class = "wrap">
                        <img :src="copyright.logo" />
                        <em>{{copyright.name}}</em>
                    </div>
                </div>
            */
        }),
        image : heredoc(function() {
            /*
                <div class = "image" :style = "{width : width, height : height}">
                    <transition name = 'fade'>
                        <div class = 'placeholder' v-if = 'iswait'>
                            <span class="loader small"></span>
                        </div>
                     </transition>
                     <img :src = 'url' />
                    <slot></slot>
                </div>
            */
        }),
        swiper : heredoc(function() {
            /*
                <div class = "swiper">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <slot></slot>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            */
        }),
        actionsheet : heredoc(function() {
            /*
                <div class = "actionsheet" :class = "[{on : base_on}, this.direction, name, viewname]">
                    <div v-click = "_m_hide" class = "mask ev-stop ev-prevent" :class = "{on : mask_on}"></div>
                    <div class = "box" :class = "{on : box_on}">
                        <div class = "wrap">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            */
        }),
        menu :  heredoc(function() {
            /*
                <div class = "menu" v-show = "toggle" transition = "fade">
                   <slot></slot>
                </div>
            */
        }),
        spinner : heredoc(function() {
            /*
                <div class = "spinner">
                    <a :class = "{disable : min_disable}" class = "button icon-move" v-click = "m_sub"></a>
                    <input type = "tel" v-model = "value | int" />
                    <a :class = "{disable : max_disable}" class = "button icon-add" v-click = "m_add"></a>
                </div>
            */
        }),
        pop : heredoc(function() {
            /*
                <div class = "pop" :class = "[{on : base_on}, name]">
                    <div v-click = "_m_hide" class = "mask ev-stop ev-prevent" :class = "{on : mask_on}"></div>
                    <div class = "box ev-stop ev-prevent" :class = "box_class">
                        <div class = "wrap">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            */
        }),
      
        zan : heredoc(function() {
            /*
                <div class = "zan">
                    <div class = "mouth" v-click = "m_append">
                    </div>
                    <div class = "box">
                        
                    </div>
                    <a v-click = "m_close" class = "close button"></a>
                </div>
            */
        }),
        heat_scroll : heredoc(function() {
            /*
                <div class = "heat-scroll" :class = 'skin'>
                    <div class = "wrap">
                        <div class = "title">
                            {{title}}
                        </div>
                        <div class = "list">
                            <div class = "wrap">
                                <slot></slot>
                            </div>
                        </div>
                        <slot name = "insert"></slot>
                    </div>
                </div>
            */
        }),
        scroll : heredoc(function() {
            /*
                <div class = 'scroll'>
                    <div class = 'box'>
                        <div class = 'downpull'>
                            <div class = 'default' :class = '{on : 1 == vr_scale}'>
                                <small v-show = 'false == downpull_trigger'>
                                    <div class = 'logo' :class = 'fg' v-show = '!downpull_lock'>
                                        <slot name = 'logo'>
                                            <i class = 'icon-refresharrow'></i>
                                        </slot>
                                    </div>
                                    <canvas width = '40px' height = '40px'></canvas>
                                </small>
                                <em class = 'loader' v-show = 'true == downpull_trigger'></em>
                            </div>
                        </div>
                        <div class = 'wrap'>
                            <slot></slot>
                        </div>
                        <slot name = 'bottom'></slot>
                        <div class = 'uppull'>

                        </div>
                    </div>
                    <div v-if = 'device' class = 'vr-scrollbar'>
                        <div class = 'bg'></div>
                        <div class = 'slider'></div>
                    </div>
                </div>
            */
        }),
        window : heredoc(function() {
            /*
                <sep-pop :width = "width" :height = "height"  :modal = "modal">
                    <div :class = 'name' class = 'window'>
                        <div class = 'wrap'>
                            <em>
                                {{title}}
                            </em>
                            <div class = 'content'>
                                <slot></slot>
                            </div>
                            <a class = 'button close icon-close' v-click = 'm_hide'></a>
                        </div>
                    </div>
                </sep-pop>
            */
        }),
        button : heredoc(function() {
            /*
                <a :class = "{'disable' : disable}" class = "button default">
                    <i :class = "icon" v-if = "icon && !loading_status"></i>
                    <small v-if = "loading_status">
                        <span class="loader small"></span>
                    </small>
                    <em v-show = "0 == wtext_status && 1 == text_status">{{text}}</em>
                    <em v-show = "1 == wtext_status">{{wtext}}</em>
                </a>
            */
        }),
        invalid : heredoc(function() {
            /*
                <div class = "tip">
                    <div class = "wrap">
                        <i :class = "icon"></i>
                        <em>{{text}}</em>
                        <p>
                            <slot></slot>
                        </p>
                    </div>
                </div>
            */
        }),
        empty : heredoc(function() {
            /*
                <div class = "tip">
                    <div class = "wrap">
                        <i :class = "icon"></i>
                        <em>{{text}}</em>
                        <p>
                            <slot></slot>
                        </p>
                    </div>
                </div>
            */
        }),
        tip : heredoc(function() {
            /*
                <div class = "tip">
                    <div class = "wrap">
                        <i :class = "icon"></i>
                        <em>{{text}}</em>
                        <p>
                            <slot></slot>
                        </p>
                    </div>
                </div>
            */
        }),
        sessionless : heredoc(function() {
            /*
                <div class = "tip">
                    <div class = "wrap">
                        <i :class = "icon"></i>
                        <em>{{text}}</em>
                        <p>
                            <a v-click = 'm_login' class = "button default border-radius-near red mini border-radius-30px">立即登录</a>
                        </p>
                    </div>
                </div>
            */
        }),
        timeout : heredoc(function() {
            /*
                <div class = "tip">
                    <div class = "wrap">
                        <i :class = "icon"></i>
                        <em>{{text}}</em>
                        <p>
                            <slot></slot>
                        </p>
                    </div>
                </div>
            */
        }),
        invalid : heredoc(function() {
            /*
                <div class = "tip">
                    <div class = "wrap">
                        <i :class = "icon"></i>
                        <em>{{text}}</em>
                        <p>
                            <slot></slot>
                        </p>
                    </div>
                </div>
            */
        }),
        error : heredoc(function() {
            /*
                <div class = "tip">
                    <div class = "wrap">
                        <i :class = "icon"></i>
                        <em>{{text}}</em>
                        <p>
                            <slot></slot>
                        </p>
                    </div>
                </div>
            */
        }),
        lively_loader : heredoc(function() {
            /*
                <div class = "lively-loader on">
                    <div class = "mask ev-prevent"></div>
                    <div class = "box on">
                        <div class = "icons-jump on"></div>
                        <div class = "reflections on"></div>
                    </div>
                </div>
            */
        }),
        toast : heredoc(function() {
            /*
                <div class = "toast">
                    <div class = "mask ev-prevent">
                        
                    </div>
                    <div class = "box ev-prevent">
                        <i></i>
                        <small></small>
                    </div>
                </div>
            */
        }),
        hljs : heredoc(function() {
            /*
                <pre>
                    <code :class = "symbol"><slot></slot></code>
                </pre>
            */
        }),
        render : heredoc(function() {
            /*
                <div class = 'render' :mode = "mode">
                    <transition name = 'fade'>
                        <div class = "entity" v-if = "1 == status">
                            <slot name = "entity"></slot>
                        </div>
                    </transition>
                    <div class = "empty" v-if = "0 == status">
                        <slot name = "empty">
                             <sep-empty></sep-empty>
                        </slot>
                    </div>
                    <div class = "init"  v-if = "100 == status">
                        <slot name = "init">
                            <sep-loader></sep-loader>
                        </slot>
                    </div>
                    <div class = "sessionless" v-if = "-1 == status">
                        <slot name = "sessionless">
                            <sep-sessionless></sep-sessionless>
                        </slot>
                    </div>
                    <div class = "timeout" v-if = "-2 == status">
                        <slot name = "timeout">
                            <sep-timeout></sep-timeout>
                        </slot>
                    </div>
                    <div class = "invalid" v-if = "-3 == status">
                        <slot name = "invalid">
                            <sep-invalid></sep-invalid>
                        </slot>
                    </div>
                    <div class = "error" v-if = "500 == status">
                        <slot name = "error">
                            <sep-error :text = 'text'></sep-error>
                        </slot>
                    </div>
                </div>
            */
        })
	} ;
}) ;