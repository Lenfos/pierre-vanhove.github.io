$(document).ready(function(){
    let card = $('.cardProject');
    let width = card.outerWidth(true);
    setInterval(function(){
        $(".slider ul li:first-child").animate({"margin-left": (width + 42) * -1}, 1200, function(){
            $(this).css("margin-left",20).appendTo(".slider ul");
        });
    }, 3500);
})

