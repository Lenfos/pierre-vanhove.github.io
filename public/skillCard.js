$(document).ready(function (){
    let card = $('.skillCard');
    let width = $(window).width();

    card.click(function (){
        if (width > 576){
            if ($(this).hasClass('active')){
                card.removeClass('active');
                card.removeClass('other');
            }
            else{
                card.removeClass('active');
                card.addClass('other');
                $(this).removeClass('other');
                $(this).toggleClass('active');
            }
        }
        else {
            if ($(this).hasClass('active')) {
                card.removeClass('active');
            }
            else {
                card.removeClass('active');
                $(this).toggleClass('active');
            }

        }

    })
})