$("#hero").css("margin-top", "-" + ($("#top-links").height()) + "px");

$(document).ready(function () {
    $(window).on("resize", function () {
        $("#hero").css("margin-top", "-" + ($("#top-links").height()) + "px");
    });
});