$(document).ready(function (){
    let card = $('.skillCard');

    card.click(function (){
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
    })
})