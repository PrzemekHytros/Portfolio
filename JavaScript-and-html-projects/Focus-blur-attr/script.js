$(function () {
    $("input[name='email']").focus(function () {
        if ($(this).val() == "user.name@domain.com") {
            $(this).val("");
            $(this).css("color", "black")
        }
    });

    $("input[name='email']").blur(function () {
       if ($(this).val() == "") {
            $(this).val("user.name@domain.com");
            $(this).css("color", "#999");
            $("#emailFormSubmit").attr("disabled", "disabled");
        }
        else {
            $("#emailFormSubmit").removeAttr("disabled");
        }
    });
});