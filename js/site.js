$("main").css("min-height", "calc(100% - " + ($("header").height()) + "px)");
$("main").css("margin-top", "-" + ($("header").height()) + "px");

$(document).ready(function () {
    $(window).on("resize", function () {
        $("main").css("min-height", "calc(100% - " + ($("header").height()) + "px)");
        $("main").css("margin-top", "-" + ($("header").height()) + "px");
    });
});