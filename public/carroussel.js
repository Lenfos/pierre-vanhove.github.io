$(document).ready(function(){
    const initalRotationSpeed = 4000;
    const windowHeight = $(window).height();
    let card = $('.cardProject');
    let width = card.outerWidth(true);
    let button = $('.buttonCardProject');
    let detail = $('#ProjectDetail');
    let close = $('#close');
    let topPos;
    const detailHeight = detail.height();
    let interval = setInterval(Interval, initalRotationSpeed);

    function Interval(){
        $(".slider ul li:first-child").animate({"margin-left": (width + 42) * -1}, 1200, function(){
            $(this).css("margin-left",20).appendTo(".slider ul");
        });
    }

    $(window).on("scroll", function () {
        const viewportPos = $(window).scrollTop();
        topPos = (windowHeight - detailHeight)/2 + viewportPos;
    })

    close.click(function () {
        detail.css('display', "none");
        $('body').css("overflow-y", "initial");
        $("section").css("filter", "none");
        $("#textProjectDetail").empty();
        interval = setInterval(Interval, initalRotationSpeed);
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
        let id = this.getAttribute('id');
        $("#textProjectDetail").load(`Assets/TextProject/${id}.txt`);
        console.log(`${id}.txt`);
        clearInterval(interval);
    });
})

