// window.__appUrl = "http://192.168.1.192:7777/gms";
window.__appUrl = "http://wap.gmsweipai.com/gms";
// window.__appUrl = 'http://192.168.1.127:8080/gms'; // api 接口路径 < 可配置 >

function size() {
    var html = document.querySelector('html');
    html.style.fontSize = document.body.clientWidth / 7.5 + 'px';
}
size();
setTimeout(function () {
    document.querySelector("body").style.visibility = "visible"
    document.querySelector("html").style.visibility = "visible"
}, 100);
window.onresize = size;
if (localStorage.getItem('user_key')) {
    var msg = confirm('您已经注册过账号，已成为古美术会员，立即前往古美术拍卖吧！')
    if (msg) {
        window.location.href = 'http://wap.gmsweipai.com/gms.app/#/'
    }
}
var isSubmit = true;
var num = 60;
var timer = null;
var isCode = true;
var parentMobile = location.href.includes('parentMobile') ? location.href.split('parentMobile=')[1].substr(0, 11) : sessionStorage.getItem('parentMobile') ? sessionStorage.getItem('parentMobile') : "";
console.log(parentMobile)

function submit(s) {
    if (s) {
        $(".rules_img").css({
            "background-image": "url('image/regist/check_on.png')"
        })
        $('.submit').css({
            "background-image": "url('image/regist/Button1.png')"
        })
    } else {
        $(".rules_img").css({
            "background-image": "url('image/regist/check_off.png')"
        })
        $('.submit').css({
            "background-image": "url('image/regist/btn3.png')"
        })
    }
}
submit(isSubmit)
$('.rules_img').click(function () {
    isSubmit = !isSubmit;
    submit(isSubmit)
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
$('.phone_btn').focus(function () {
    $('.err_mobile').css({
        opacity: 0
    })
})
$('.code_btn').focus(function () {
    $('.err_code').css({
        opacity: 0
    })
})
$('.password_btn').focus(function () {
    $('.err_password').css({
        opacity: 0
    })
})

function yGetCode() {
    isCode = false;
    $('.code_handle').css({
        'background': ' url("image/regist/Button2_off.png") no-repeat center center',
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
        'background': ' url("image/regist/Button2.png") no-repeat center center',
    }).text('获取验证码');
    clearInterval(timer);
    num = 60
    isCode = true;
}
// 获取验证码
$('.code_handle').click(function () {
    if (isCode) {
        var mobile = $('.phone_btn').val();
        if (Reg(mobile, 'mobile')) {
            $.ajax({
                async: false,
                type: 'get',
                url: __appUrl + `/api/sms/${mobile}/request/1`,
                data: {},
                success: function (data) {
                    yGetCode();
                },
                error: function () {
                    alert("获取失败，请重新获取验证码！");
                }
            })
        } else {
            $('.err_mobile').css({
                opacity: 1
            })
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
// 注册

$('form').submit(function (e) {
    e.preventDefault()
    if (isSubmit) {
        var mobile = $('.phone_btn').val();
        var password = $('.password_btn').val();
        var code = $('.code_btn').val();
        if (Reg(mobile, 'mobile')) {
            if (code != '' && code.length == 6) {
                if (Reg(password, 'password')) {
                    var phoneUUID = uuid();
                    var smsCode = code
                    var data = {
                        mobile,
                        password: md5(md5(password) + mobile),
                        parentMobile,
                        phoneUUID,
                        smsCode
                    }
                    console.log(data)
                    $.ajax({
                        url: __appUrl + `/api/member/registerTest`, //发送后台的url  
                        type: 'post',
                        data: data, //序列化表单内容  
                        dataType: 'text', //后台返回的数据类型  
                        timeout: 10000, //超时时间  
                        beforeSend: function (XMLHttpRequest) {
                            $('.mask').show(); //在后台返回success之前显示loading图标  
                        },
                        success: function (data) {
                            $('.mask').hide();
                            if (data instanceof Object) {
                                data = data
                            } else {
                                data = JSON.parse(data)
                            }
                            console.log(data)
                            if (data.success) {
                                alert('恭喜您成为古美术会员！');
                                localStorage.setItem('account', JSON.stringify({
                                    "mobile": mobile,
                                    "password": password,
                                    "phoneUUID": phoneUUID
                                }))
                                localStorage.setItem('user_key', 1)
                                location.href = "./complete.html"
                            } else {
                                alert(data.errorMessage)
                            }
                        },
                        error: function (err) {
                            console.log(err)
                            $('.mask').hide();
                            alert('服务器出错！')
                        }
                    })
                } else {
                    $('.err_password').css({
                        opacity: 1
                    })
                }
            } else {
                $('.err_code').css({
                    opacity: 1
                })
            }
        } else {
            $('.err_mobile').css({
                opacity: 1
            })
        }
    }
})