$('#formreg').validate({
    rules: {
        username: {
            required: true,
            minlength: 11
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 16
        },
        passcheck: {
            required: true,
            equalTo: "#password"
        }

    },
    messages: {
        username: {
            required: "请输入手机号",
            minlength: "请输入11位手机号"
        },
        password: {
            required: "请输入密码",
            minlength: "密码长度太短",
            maxlength: "密码长度太长"
        },
        passcheck: {
            required: "请再次输入密码",
            equalTo: "两次密码输入不一致"
        }
    }
})