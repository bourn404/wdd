//-- What is WDD? --//
$(document).ready(function() {
    $("#rest-Web")
        .delay(2000)
        .animate(
            {
                opacity: 0,
                width: "-=100%"
            },
            3000
        );

    $("#rest-Design")
        .delay(2000)
        .animate(
            {
                opacity: 0,
                width: "-=100%"
            },
            3000
        );

    $("#rest-Development")
        .delay(2000)
        .animate(
            {
                opacity: 0,
                width: "-=100%"
            },
            3000
        );
});
//-- (end of) What is WDD? --//
var clicks = 0;
document.querySelector("#nav-toggle").addEventListener("click", function() {
    this.parentNode.classList.toggle("open");
    clicks++;
    console.log(clicks);
});
