$("#J_loginForm").validate({
    rules: {
        username: {
            required: true,
            minlength: 11
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 16
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
        }
    }
})