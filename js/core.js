//-- What is WDD? --//
$(document).ready(function() {
    $("#wdd-web-rest")
        .delay(3000)
        .animate({opacity: 0, width: 0}, 2000)
        .fadeOut(0);
    $("#wdd-des-rest")
        .delay(3000)
        .animate({opacity: 0, width: 0}, 2000)
        .fadeOut(0);
    $("#wdd-dev-rest")
        .delay(3000)
        .animate({opacity: 0, width: 0}, 2000)
        .fadeOut(0);

    $("#hoursesImg")
        .delay(1000)
        .animate({right: "-40px"}, 2000)
        .delay(5000)
        .animate({right: "-310px"}, 2000);
});
//-- (end of) What is WDD? --//
var clicks = 0;
document.querySelector("#nav-toggle").addEventListener("click", function() {
    this.parentNode.classList.toggle("open");
    clicks++;
    console.log(clicks);
});
