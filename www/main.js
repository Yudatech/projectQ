$(document).ready(() => {
    $(".disable-nav-item").html('<i class="far fa-circle"></i>');


    $("#toggle-btn").on("click", () => {
        $("#bottom-nav").toggleClass("on-off");
        $("#nav-footer").toggleClass("up-down");
        $("#nav-footer").toggleClass("footer-bottom")
    });


});