//-- What is WDD? --//
$(document).ready(function() {
    $("#wdd-web-rest")
        .delay(3000)
        .animate(
            {
                opacity: 0,
                width: 0
            },
            2000
        )
        .fadeOut(0);

    $("#wdd-des-rest")
        .delay(3000)
        .animate(
            {
                opacity: 0,
                width: 0
            },
            2000
        )
        .fadeOut(0);

    $("#wdd-dev-rest")
        .delay(3000)
        .animate(
            {
                opacity: 0,
                width: 0
            },
            2000
        )
        .fadeOut(0);
});
//-- (end of) What is WDD? --//
var clicks = 0;
document.querySelector("#nav-toggle").addEventListener("click", function() {
    this.parentNode.classList.toggle("open");
    clicks++;
    console.log(clicks);
});
