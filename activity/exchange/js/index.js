$(function () {
    // window.__appUrl = "http://192.168.1.192:7777/gms";
    window.__appUrl = "http://wap.gmsweipai.com/gms";
    window.__url = 'http://www.gmsweipai.com/gms.app/#/'
    // window.__url = 'http://192.168.1.124/gms.app/#/'

    function size() {
        var html = document.querySelector('html');
        html.style.fontSize = document.body.clientWidth / 7.5 + 'px';
    }
    size();
    window.onresize = size;
    setTimeout(function () {
        document.querySelector("body").style.visibility = "visible"
        document.querySelector("html").style.visibility = "visible"
    }, 100);
    var isSubmit = true;
    var num = 60;
    var timer = null;
    var isCode = true;
    var isRegist = true;
    // 图形验证码
    $('.code_image img').attr('src', __appUrl + '/api/v2/rand/randImag?mchCode=888&' + Date.now())
    $('.code_image').click(function () {
        $(this).find('img').attr('src', __appUrl + '/api/v2/rand/randImag?mchCode=888&' + Date.now())
    })

    function Reg(str, type) {
        // var regMobile = /^1[3|4|5|8][0-9]\d{4,8}$/; // -手机验证,不验证第二位
        var regMobile = /^1[0-9]{10}$/;
        var regPassword = /^[a-zA-Z0-9]{6,18}$/;
        switch (type) {
            case "mobile":
                return regMobile.test(str);
                break;
            case "password":
                return regPassword.test(str);
                break;
            default:
                break;
        }
    }

    function yGetCode() {
        isCode = false;
        $('.code_handle').css({
            background: "#948d8c"
        }).text('60S后重发')
        timer = setInterval(function () {
            num--;
            $('.code_handle').text(`${num}S后重发`);
            if (num === 0) {
                nGetCode();
            }
        }, 1000)
    }

    function nGetCode() {
        $('.code_handle').css({
            'background': '#ff4532'
        }).text('获取验证码');
        clearInterval(timer);
        num = 60
        isCode = true;
    }
    // 获取验证码
    $('.code_handle').click(function () {
        if (isCode) {
            var mobile = $('.phone_btn').val();
            var randCode = $('.randCode').val();
            if (Reg(mobile, 'mobile')) {
                $.ajax({
                    async: false,
                    type: 'get',
                    url: __appUrl + `/api/common/${mobile}/request/4?randCode=${randCode}&mchCode=888`,
                    data: {},
                    beforeSend: function () {
                        $('.code_handle').text(`发送中...`);
                    },
                    success: function (data) {
                        if (data instanceof Object) { //安卓和ios的内核机制会把返回的数据转换
                            data = data
                        } else {
                            data = JSON.parse(data)
                        }
                        console.log(data)
                        if (data.success) {
                            yGetCode();
                        } else {
                            showErrorMsg(data.errorMessage)
                            $('.code_handle').text(`获取验证码`);
                        }
                    },
                    error: function (err) {
                        console.log(err)
                        showErrorMsg('服务器错误')
                        $('.code_handle').text(`获取验证码`);
                    }
                })
            } else {
                showErrorMsg('手机号码不正确')
            }
        }
    })
    // 生成uuid
    function uuid() {
        for (var c = [], m = 0; 36 > m; m++) c[m] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
        c[14] = "4";
        c[19] = "0123456789abcdef".substr(c[19] & 3 | 8, 1);
        c[8] = c[13] = c[18] = c[23] = "-";
        return c.join("")
    }
    // 提示框
    function showErrorMsg(str) {
        isSubmit = false;
        $('.err_msg').text(str).parent().css({
            display: "flex"
        })
        setTimeout(function () {
            $('.err_msg').parent().hide()
            isSubmit = true
        }, 2000);
    }
    //关闭注册界面
    $('.close_btn').click(function () {
        $('main').hide();
    })
    $('.rules_img').click(function () {
        if ($(this).hasClass('chose')) {
            $(this).removeClass('chose')
            isRegist = true
            $('.regist_view button').css({
                background: "#ff4532"
            })
        } else {
            $(this).addClass('chose')
            isRegist = false
            $('.regist_view button').css({
                background: "#888888"
            })
        }
    })
    $('.form_view').submit(function (e) { //领取接口
        e.preventDefault()
        var mobile = $('.phone_btn').val();
        var smsCode = $('.smsCode_btn').val();
        if (isSubmit) {
            if (Reg(mobile, 'mobile')) {
                if (smsCode != '' && smsCode.length == 6) {
                    $.ajax({
                        url: __appUrl + `/api/activity/receiveRedpacket/${mobile}/${smsCode}`, //发送后台的url  
                        type: 'get',
                        dataType: 'text', //后台返回的数据类型  
                        timeout: 6000, //超时时间  
                        beforeSend: function (XMLHttpRequest) {
                            $('.mask').show()
                        },
                        success: function (data) {
                            $('.mask').hide()
                            console.log(data)
                            if (data instanceof Object) { //安卓和ios的内核机制会把返回的数据转换
                                data = data
                            } else {
                                data = JSON.parse(data)
                            }

                            if (data.success) {
                                alert('恭喜您领取成功！快前往古美术拍场吧！')
                                window.location.href = __url;
                            } else {
                                if (data.errorCode == 10) {
                                    $('.user_text').text(`账号：${mobile}`)
                                    $('main').css({
                                        display: 'flex'
                                    })
                                    sessionStorage.setItem('mobile', mobile)
                                    sessionStorage.setItem('smsCode', smsCode)
                                } else {
                                    showErrorMsg(data.errorMessage)
                                }
                            }
                        },
                        error: function (err) {
                            $('.mask').hide()
                            showErrorMsg('服务器出错！')
                        }
                    })
                } else {
                    showErrorMsg('验证码不正确')
                }
            } else {
                showErrorMsg('手机号码不正确')
            }
        }
    })
    $('.regist_view').submit(function (e) { //注册加领取
        e.preventDefault()
        if (isRegist) {
            var mobile = sessionStorage.getItem('mobile')
            var smsCode = sessionStorage.getItem('smsCode')
            var password = $('.password').val();
            var rePassword = $('.repass_btn').val();
            if (password.length == 0 || rePassword.length == 0 || password.length < 6 || rePassword.length < 6) {
                showErrorMsg('请至少输入6位密码')
            } else {
                if (password == rePassword) {
                    password = md5(md5(password) + mobile);
                    $.ajax({
                        url: __appUrl + `/api/activity/receiveRedpacketForNewMember/${mobile}/${smsCode}/${password}/1`, //发送后台的url  
                        type: 'get',
                        dataType: 'text', //后台返回的数据类型  
                        timeout: 6000, //超时时间  
                        beforeSend: function (XMLHttpRequest) {
                            $('.mask').show()
                        },
                        success: function (data) {
                            $('.mask').hide()
                            console.log(data)
                            if (data instanceof Object) { //安卓和ios的内核机制会把返回的数据转换
                                data = data
                            } else {
                                data = JSON.parse(data)
                            }
                            if (data.success) {
                                alert('恭喜您领取成功并成为古美术会员！快前往古美术拍场吧！')
                                localStorage.setItem('account', JSON.stringify({
                                    "mobile": mobile,
                                    "password": rePassword
                                }))
                                window.location.href = __url;

                            } else {
                                console.log(data)
                                showErrorMsg(data.errorMessage)
                            }
                        },
                        error: function (err) {
                            $('.mask').hide()
                            showErrorMsg('服务器出错！')
                        }
                    })
                } else {
                    showErrorMsg('两次输入密码不一致')
                }
            }

        }
    })
})