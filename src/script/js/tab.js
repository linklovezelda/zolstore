$(function() {

    var callBackUrl = "http://www.zol.com";
    var baseUrl = "https://login.zol.com/";
    var zolBaseUrl = "https://service.zol.com.cn";
    var MerchantUrl = "http://maijia.zol.com";

    //                var baseUrl    = "http://login.zhangfan.test.zol.com/";

    //		var userAgent  = window.navigator.userAgent.toLowerCase();
    //                if (navigator.userAgent.indexOf("MSIE") && ("6.0" == $.browser.version)){                
    //                    zolBaseUrl = "http://service.zol.com.cn";                    
    //                }      

    $.ajax({
        // 获取id，challenge，success（是否启用failback）
        url: "/index.php?c=Ajax_Register&a=StartCaptchaServlet&t=" + (new Date()).getTime(), // 加随机数防止缓存
        type: "get",
        dataType: "json",
        success: function(data) {
            // 使用initGeetest接口
            // 参数1：配置参数
            // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
            initGeetest({
                gt: data.gt,
                challenge: data.challenge,
                new_captcha: data.new_captcha,
                product: "embed", // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
                offline: !data.success // 表示用户后台检测极验服务器是否宕机，一般不需要关注
                    // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
            }, handlerEmbed);
        }
    });

    function captchaPhone() {
        var curtime = new Date().getTime();
        var numCnt = 5;
        var url = zolBaseUrl + "/captcha.php?token=" + curtime + '&numCnt=' + numCnt + '&width=98&height=38';
        $("#J_login_mobile_img").attr("src", url);
        $("#J_login_mobile_token").val(curtime);
        return false;
    }

    $("#J_login_mobile_img").click(function() {
        captchaPhone();
    });

    // 登录切换
    $(".otherLogin-bar").bind('click', function() {
        var rel = $(this).attr("rel");
        if ('J_phone' == rel) {
            $(this).removeClass("mobileLogin-bar").attr("rel", "J_common").html("普通方式登录");
            $("#J_login_common").hide();
            $("#J_login_mobile").show();
            $("#J_login_type").val(2);
        } else {
            $(this).addClass("mobileLogin-bar").attr("rel", "J_phone").html("手机动态码登录");
            $("#J_login_common").show();
            $("#J_login_mobile").hide();
            $("#J_login_type").val(1);
        }
    });

    // 选中加红色边框
    $(":input[name != J_login_send_button]").focus(function() {
        $(this).parent().addClass("focus");
    }).blur(function() {
        $(this).parent().removeClass("focus");
    })

    // 手机号验证
    var checkMobile = function(mobile) {
        var flag = false;
        if (mobile) {
            var regPartton = new RegExp(/1[3-8]+\d{9}/);
            if (regPartton.test(mobile)) {
                flag = true;
            }
        }

        return flag;
    }

    // 发送验证码倒计时时间
    var timeout = null;
    var countDownNumber = 100;
    var userMobileCountDown = function() {
        $("#J_login_send_button").hide();
        countDownNumber--;
        $('#J_login_send_wait').html(countDownNumber + '秒后重新获取').show();
        if (!countDownNumber) {
            countDownNumber = 100;
            clearTimeout(timeout);
            $("#J_login_send_wait").hide();
            $("#J_login_send_button").show();
        } else {
            timeout = setTimeout(userMobileCountDown, 1000);
        }
    }


    // // 新版获取手机验证码
    // var handlerEmbed = function(captchaObj) {
    //     // 获取手机验证码
    //     $("#J_login_send_button").bind("click", function(e) {
    //         var mobile = $("#J_login_mobile_number").val();
    //         if ('' == mobile) {
    //             $("#J_login-mobile-wrong-tips").html("请填写手机号").show();
    //             return false;
    //         }

    //         if (!checkMobile(mobile)) {
    //             $("#J_login-mobile-wrong-tips").html("请填写正确的手机号").show();
    //             return false;
    //         }

    //         var validate = captchaObj.getValidate();
    //         if (!validate) {
    //             $("#J_login-mobile-wrong-tips").html("请先完成验证").show();
    //             e.preventDefault();
    //             return false;
    //         } else {
    //             $("#J_login-mobile-wrong-tips").hide();
    //         }
    //         // 请求验证码
    //         var url = baseUrl + "index.php?c=Ajax_Register&a=VerifyLoginServlet&sendType=login&callback=?&t=" + Math.random();

    //         var geetest_challenge = $('input[name="geetest_challenge"]').val();
    //         var geetest_validate = $('input[name="geetest_validate"]').val();
    //         var geetest_seccode = $('input[name="geetest_seccode"]').val();

    //         $.post(
    //             url, {
    //                 mobile: mobile,
    //                 geetest_challenge: geetest_challenge,
    //                 geetest_validate: geetest_validate,
    //                 geetest_seccode: geetest_seccode
    //             },
    //             function(data) {
    //                 var data = JSON.parse(data);
    //                 if (data.flag) {
    //                     $("#J_login-mobile-wrong-tips").hide();
    //                     setTimeout(userMobileCountDown, 1000);
    //                 } else {
    //                     $("#J_login-mobile-wrong-tips").html(data.msg).show();
    //                     captchaObj.reset(); // 调用该接口进行重置
    //                 }
    //             }
    //         );
    //         return false;

    //     });

    // 将验证码加到id为captcha的元素里，同时会有三个input的值：geetest_challenge, geetest_validate, geetest_seccode
    captchaObj.appendTo("#embed-captcha");
    captchaObj.onReady(function() {
        $("#wait")[0].className = "hide";
    });
    // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
};

// 普通登录按钮切换
var userLoginBtn = function(loginType) {
        if ('none' == loginType) {
            $("#J_loginingBtn").show();
            $("#J_loginBtn").hide();
        } else {
            $("#J_loginingBtn").hide();
            $("#J_loginBtn").show();
        }
    }
    // 商家登录按钮切换
var MerchantLoginBtn = function(loginType) {
    if ('none' == loginType) {
        $("#J_loginingBtn_Merchant").show();
        $("#J_loginBtn_Merchant").hide();
    } else {
        $("#J_loginingBtn_Merchant").hide();
        $("#J_loginBtn_Merchant").show();
    }
}

// 手机号登录按钮切换
var userMobileLoginBtn = function(loginType) {
    if ('none' == loginType) {
        $("#J_loginingBtn_mobie").show();
        $("#J_loginBtn_mobile").hide();
    } else {
        $("#J_loginingBtn_mobie").hide();
        $("#J_loginBtn_mobile").show();
    }
}

// 检测登录名是邮箱提示
$("#J_loginUser").bind("keyup", function() {
    var email = $(this).val();
    if (email) {
        var indexNumber = email.indexOf("@");
        if (indexNumber > 0) {
            var emailArr = new Array("qq.com", "163.com", "gmail.com", "126.com", "sina.com", "hotmail.com");
            var emailList = '';

            var number = emailArr.length;
            var emailtTitle = email.substr(0, indexNumber);
            var emailBody = email.substr(indexNumber + 1);
            for (i = 0; i < number; i++) {
                if (-1 !== emailArr[i].indexOf(emailBody)) {
                    if (email != (emailtTitle + '@' + emailArr[i])) {
                        emailList += '<li>' + emailtTitle + '@' + emailArr[i] + '</li>';
                    }
                }
            }
            $("#J_accountList").html(emailList).show();

            $("#J_accountList > li").bind("click", function() {
                $("#J_loginUser").val($(this).html());
                $("#J_accountList").hide();
            });
        } else {
            $("#J_accountList").hide();
        }
    }
});

// 检测键盘大小写问题
// $("#J_loginPsw").bind("keypress", function(e) {
//     var e = e || window.event;
//     var o = e.target || e.srcElement;
//     var keyCode = e.keyCode || e.which; // 按键的keyCode
//     var isShift = e.shiftKey || (keyCode == 16) || false; // shift键是否按住
//     if (((keyCode >= 65 && keyCode <= 90) && !isShift) || ((keyCode >= 97 && keyCode <= 122) && isShift)) {
//         $("#J_loginCapsLock").show();
//     } else {
//         $("#J_loginCapsLock").hide();
//     }
// });

// 普通登录
var userCommonLogin = function() {
    var username = $("#J_loginUser").val();
    var password = $("#J_loginPsw").val();
    var bind_code = $("#bind_code").val();
    var mobile = $("#bind_keyword").val();
    if ('' == username) {
        $("#J_login-wrong-tips").html("请填写手机号/邮箱/用户名").show();
        return false;
    }

    if ('' == password) {
        $("#J_login-wrong-tips").html("请填写正确的密码").show();
        return false;
    }
    password = $.md5(password + 'zol');
    userLoginBtn('none');
    var url = "/index.php?a=AjaxShopLogin&callback=?&t=" + Math.random();
    $.getJSON(
        url, {
            username: username,
            password: password,
            bind_code: bind_code,
            mobile: mobile
        },
        function(data) {
            if (data.flag) {
                // 回调 登录zol                                    
                var url = zolBaseUrl + "/user/api/v2014/login.php?act=signin&callback=?&t=" + Math.random();
                $.getJSON(
                    url, {
                        username: data.userName,
                        checkCode: data.checkCode,
                        sid: data.userId,
                        check: data.check
                    },
                    function(dataJson) {
                        if (dataJson.code) {

                            setTimeout(function() {
                                $("#J_login-wrong-tips").html(dataJson.msg).show();
                                userLoginBtn();
                            }, 1000);
                        } else {
                            window.location = callBackUrl;
                        }
                    }
                );
            } else {

                if (data.msg == '请绑定手机号') {
                    $("#chgpwd_changePwdWindowDiv").show();

                    //去验证
                    $('#validate').on('click', function() {
                        location.href = data.url;
                    });

                    $('.close').on('click', function() {
                        $("#J_loginingBtn").hide();
                        $("#J_loginBtn").show();
                        $("#chgpwd_changePwdWindowDiv").hide();
                    });
                    $('.cancel').on('click', function() {
                        $("#J_loginingBtn").hide();
                        $("#J_loginBtn").show();
                        $("#chgpwd_changePwdWindowDiv").hide();
                    });
                    return false;
                }
                if (data.msg == '验证码错误') {
                    $(".login-safe-codenotice").html(data.msg).show();
                    return false;
                }
                setTimeout(function() {
                    $("#J_login-wrong-tips").html(data.msg).show();
                    userLoginBtn();
                }, 1000);
            }
        }
    );
}
$("#J_loginBtn").bind("click", function(e) {
    userCommonLogin();
    return false;
});
// 商家登录
var MerchantCommonLogin = function() {
    var username = $("#J_loginUser_Merchant").val();
    var password = $("#J_loginPsw_Merchant").val();
    if ('' == username) {
        $("#J_login-wrong-tips-merchant").html("请填写用户名").show();
        return false;
    }

    if ('' == password) {
        $("#J_login-wrong-tips-merchant").html("请填写正确的密码").show();
        return false;
    }
    MerchantLoginBtn('none');
    var url = "/index.php?a=AjaxMerchantLogin&callback=?&t=" + Math.random();
    $.getJSON(
        url, {
            username: username,
            password: password
        },
        function(data) {
            if (data.flag) {
                //$("#J_login-wrong-tips-merchant").html(data.msg).show();
                MerchantUrl = data.url;
                window.location = MerchantUrl;
            } else {
                $("#J_login-wrong-tips-merchant").html(data.msg).show();
                MerchantLoginBtn();
                return false;
            }
        }
    );
}; $("#J_loginBtn_Merchant").bind("click", function(e) {
    MerchantCommonLogin();
    return false;
});
// 发送验证码倒计时时间
var timeout = null;
var countDownNumber = 100;
var userMobileBindCountDown = function() {
        countDownNumber--;
        $('#bind_sendCode').val(countDownNumber + '秒后重新获取');
        if (!countDownNumber) {
            countDownNumber = 100;
            clearTimeout(timeout);
            $('#bind_sendCode').val('发送验证码');
            $("#bind_sendCode").attr("disabled", false);
            $("#bind_sendCode").removeClass("login-safe-sendcode-disabled");
            $(".login-safe-sendcode-hide").hide();
        } else {
            timeout = setTimeout(userMobileBindCountDown, 1000);
        }
    }
    // 发送验证码
$("#bind_sendCode").bind('click', function() {
    var mobile = $("#bind_keyword").val();
    if ('' == mobile) {
        $("#bind_keywordError").html("手机号不能为空").show();
        return false;
    }
    if (!checkMobile(mobile)) {
        $("#bind_keywordError").html("请填写正确的手机号").show();
        return false;
    }
    // 请求验证码
    var url = baseUrl + "/index.php?a=SendPhoneCodeBind&callback=?&t=" + Math.random();
    $.getJSON(
        url, {
            mobile: mobile
        },
        function(data) {
            if (data.flag) {
                $("#bind_keywordError").hide();
                setTimeout(userMobileBindCountDown, 1000);
                $("#bind_sendCode").attr("disabled", true);
                $("#bind_sendCode").addClass("login-safe-sendcode-disabled");
                $(".login-safe-sendcode-hide").show().css("display", "inline-block");
            } else {
                $("#bind_keywordError").html(data.msg).show();
            }
        }
    );
    return false;
});

$(".login-safe-close").bind('click', function() {
    $("#chgpwd_changePwdWindowDiv").hide();
});


// 绑定手机号并且验证登录
$("#bind_nextBtn").bind('click', function() {
    var bind_code = $("#bind_code").val();
    if ('' == bind_code) {
        $(".login-safe-codenotice").html("验证码不能为空").show();
        return false;
    }
    userCommonLogin();
    return false;
});
// 手机号登录
var userPhoneNumberLogin = function() {
    var mobile = $("#J_login_mobile_number").val();
    var mobieCode = $("#J_login_mobile_code").val();
    if ('' == mobile) {
        $("#J_login-mobile-wrong-tips").html("请填写手机号").show();
        return false;
    }
    if (!checkMobile(mobile)) {
        $("#J_login-mobile-wrong-tips").html("请填写正确的手机号").show();
        return false;
    }
    if ('' == mobieCode) {
        $("#J_login-mobile-wrong-tips").html("请填写手机验证码").show();
        return false;
    }

    var picCode = $('#J_login_mobile_picCode').val();
    var picToken = $('#J_login_mobile_token').val();


    userMobileLoginBtn('none');
    var url = baseUrl + "/index.php?a=AjaxLoginPhone&callback=?&t=" + Math.random();
    $.getJSON(
        url, {
            mobile: mobile,
            mobieCode: mobieCode
        },
        function(data) {
            if (data.flag) {

                // 发送到论坛验证手机号
                var url = zolBaseUrl + "/user/api/v2014/phoneLogin.php?callback=?&tt=" + Math.random();
                $.getJSON(
                    url, {
                        token: data.token,
                        phone: data.mobile,
                        t: data.time
                    },
                    function(data) {
                        if (data.code) {
                            var errorMsg = '网路繁忙，请稍后再试';
                            switch (data.code) {
                                case 400:
                                    errorMsg = '验证期已过，请刷新再试一次';
                                    break;
                                case 401:
                                    errorMsg = '登录受限，请刷新再登录';
                                    break;
                                case 402:
                                    errorMsg = '登录帐号被冻结，请10分钟再试';
                                    break;
                                case 403:
                                    errorMsg = '网路繁忙，请稍后再试';
                                    break;
                                case 404:
                                    errorMsg = '网路繁忙，请刷新再试';
                                    break;
                                default:
                                    errorMsg = '网路繁忙，请稍后再试';
                            }
                            $("#J_login-mobile-wrong-tips").html(errorMsg).show();
                            userMobileLoginBtn();
                        } else {

                            // 同步本地
                            var url = baseUrl + "/index.php?a=AjaxLoginPhoneSucess&callback=?&tt=" + Math.random();
                            $.getJSON(
                                url, {
                                    userId: data.zol_sid,
                                    userName: data.zol_userid,
                                    checkCode: data.zol_check,
                                    cipher: data.zol_cipher
                                },
                                function(data) {
                                    window.location = callBackUrl;
                                }
                            );
                        }
                    }
                );

            } else {
                $("#J_login-mobile-wrong-tips").html(data.msg).show();
                captchaPhone();
                userMobileLoginBtn();
            }
        }
    );
}
$("#J_loginBtn_mobile").bind('click', function() {
    userPhoneNumberLogin();
    return false;
});

// 回车提交登录
$('#J_loginForm').keypress(function(e) {
    if (e.keyCode == 13) {
        var loginType = $("#J_login_type").val();
        loginType = parseInt(loginType);
        if (LoginBtn == 0) {
            if (1 == loginType) {
                userCommonLogin();
            }
            if (2 == loginType) {
                userPhoneNumberLogin();
            }
        } else {
            MerchantCommonLogin()
        }
    }
});
});