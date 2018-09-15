// window.__appUrl = "http://192.168.1.192:7777/gms";
// window.__appUrl = 'http://test.gmsweipai.com/gms'; 
// window.__appUrl = "http://192.168.1.99:8080/gms";
window.__appUrl = "http://wap.gmsweipai.com/gms";
window.__url = 'http://www.gmsweipai.com/gms.app/'
// window.__url = 'http://gmsmall.gmsweipai.com/gms.mall/gms.app'

function size() {
    var html = document.querySelector('html');
    html.style.fontSize = document.body.clientWidth / 7.5 + 'px';
}
size();
window.onresize = size;
var num = 60;
var timer = null;
var isCode = true;
var isRegist = true;
var token, openid, parentMobile;
document.querySelector(".mask").style.visibility = "visible"
$('.mask span').text('获取用户信息')

function getQueryString(str, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = str.match(reg);
    // var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
sessionStorage.setItem('wxCode', getQueryString('code'))
var url = __url + getQueryString(window.location.search.substr(1), 'state')

function m_push() {
    window.location.href = url;
}
$.ajax({
    method: "get",
    url: __appUrl + `/api/member/oauth/weiXinWeb/${getQueryString(window.location.search.substr(1),'code')}`,
    success: function (data) {
        console.log(data.accountState)
        switch (data.accountState) {
            case 0: //没有账号
                document.querySelector(".mask").style.visibility = "hidden"
                document.querySelector("header").style.visibility = "visible"
                document.querySelector("main").style.visibility = "visible"
                if (decodeURI(url).indexOf('?') != -1 && decodeURI(url).indexOf('parentMobile') != -1) {
                    parentMobile = getQueryString(decodeURI(url).split('?')[1], 'parentMobile')
                } else {
                    parentMobile = ""
                }
                isRegist = false;
                openid = data.openid;
                token = data.token;
                break;
            case 1: //有账号没绑定
                document.querySelector(".mask").style.visibility = "hidden"
                document.querySelector("header").style.visibility = "visible"
                document.querySelector("main").style.visibility = "visible"
                isRegist = false;
                openid = data.openid;
                token = data.token;
                break;
            case 2: //有账号有绑定
                token = data.token;
                $('.mask span').text('同步用户信息')
                $.ajax({
                    method: 'get',
                    url: __appUrl + "/api/v2/member/getByToken",
                    data: {
                        token: token
                    },
                    success: function (data) {
                        if (data instanceof Object) { //安卓和ios的内核机制会把返回的数据转换
                            data = data
                        } else {
                            data = JSON.parse(data)
                        }
                        localStorage.setItem('user', JSON.stringify(data.data))
                        window.location.href = decodeURI(url)
                    },
                    error: function (err) {
                        alert('服务器错误，请尝试刷新页面')
                    }
                })
                break;
            default:
                break;
        }
    },
    error: function (err) {
        alert('服务器错误，请尝试刷新页面')
    }
});

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
// 点击边框变颜色
$('input').click(function () {
    $(this).parent().css({
        "box-shadow": "0 .03rem .1rem 0 rgba(216, 22, 23, 0.4)"
    }).siblings('.form_group').css({
        "box-shadow": "none"
    })
})

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
        'background': '#d81617'
    }).text('获取验证码');
    clearInterval(timer);
    num = 60
    isCode = true;
}
// 提示框
function showErrorMsg(str) {
    $('.err_msg').text(str).parent().css({
        display: "flex"
    })
    setTimeout(function () {
        $('.err_msg').parent().hide()
    }, 2000);
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
                url: __appUrl + `/api/common/${mobile}/requestsms/16?mchCode=888`,
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
                    alert('服务器请求出错')
                    $('.code_handle').text(`获取验证码`);
                }
            })
        } else {
            showErrorMsg('手机号码不正确')
        }
    }
})
$('form').submit(function (e) {
    e.preventDefault()
    var mobile = $('.phone_btn').val();
    var smsCode_btn = $('.smsCode_btn').val();
    if (Reg(mobile, 'mobile')) {
        if (smsCode_btn != '' && smsCode_btn.length == 6) {
            if (isRegist) {
                $.ajax({
                    async: false,
                    type: 'post',
                    url: __appUrl + `/api/member/oauth/weiXinWebBind`,
                    data: {
                        mobile: mobile,
                        openid: openid,
                        // token: token,
                        checkCode: smsCode_btn
                    },
                    success: function (data) {
                        if (data instanceof Object) { //安卓和ios的内核机制会把返回的数据转换
                            data = data
                        } else {
                            data = JSON.parse(data)
                        }
                        console.log(data)
                        if (data.success) {
                            // showErrorMsg('关联成功')
                            // localStorage.setItem('user', JSON.stringify(data.memberLoginVo))
                            // setTimeout(function () {
                            //     window.location.href = decodeURI(url)
                            // }, 200);
                            alert('恭喜您关联手机号成功！')
                            localStorage.setItem('user', JSON.stringify(data.memberLoginVo))
                            window.location.href = decodeURI(url)
                        } else {
                            showErrorMsg(data.errorMessage)
                        }
                    },
                    error: function (err) {
                        console.log(err)
                        alert('服务器请求出错')
                    }
                })
            } else {
                $.ajax({
                    async: false,
                    type: 'post',
                    url: __appUrl + `/api/member/oauth/weiXinWebRegister`,
                    data: {
                        mobile: mobile,
                        openid: openid,
                        token: token,
                        checkCode: smsCode_btn,
                        parentMobile: parentMobile
                    },
                    success: function (data) {
                        if (data instanceof Object) { //安卓和ios的内核机制会把返回的数据转换
                            data = data
                        } else {
                            data = JSON.parse(data)
                        }
                        if (data.success) {
                            // showErrorMsg('关联成功')
                            // localStorage.setItem('user', JSON.stringify(data.memberLoginVo))
                            // setTimeout(function () {
                            //     window.location.href = decodeURI(url)
                            // }, 200);
                            alert('恭喜您关联手机号成功！')
                            localStorage.setItem('user', JSON.stringify(data.memberLoginVo))
                            window.location.href = decodeURI(url)
                        } else {
                            showErrorMsg(data.errorMessage)
                        }
                    },
                    error: function (err) {
                        console.log(err)
                        alert('服务器请求出错')
                    }
                })
            }

        } else {
            showErrorMsg('验证码不正确')
        }
    } else {
        showErrorMsg('手机号码不正确')
    }
})