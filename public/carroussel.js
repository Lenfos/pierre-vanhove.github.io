$(document).ready(function(){
    const initalRotationSpeed = 3500;
    const openRotationSpeed = 350000;
    const windowHeight = $(window).height();
    let card = $('.cardProject');
    let width = card.outerWidth(true);
    let button = $('.buttonCardProject');
    let detail = $('#ProjectDetail');
    let close = $('#close');
    let topPos;
    let open = false;
    const detailHeight = detail.height();


    $(window).on("scroll", function () {
        const viewportPos = $(window).scrollTop();
        topPos = (windowHeight - detailHeight)/2 + viewportPos;
    })

    close.click(function () {
        detail.css('display', "none");
        $('body').css("overflow-y", "initial");
        $("section").css("filter", "none");
        open = false;
    });

    button.click(function (){
        detail.css({
            'display': "initial",
            "top": topPos + "px",
            "left" : "50%",
            "transform" : "translateX(-50%)"
        });
        $('body').css("overflow-y", "hidden");
        $("section").css("filter", "blur(10px)");
        open = true;
    });

    setInterval(function(){
        $(".slider ul li:first-child").animate({"margin-left": (width + 42) * -1}, 1200, function(){
            $(this).css("margin-left",20).appendTo(".slider ul");
        });
    }, open ? openRotationSpeed : initalRotationSpeed);


})

