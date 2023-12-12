$(document).ready(function (){
    $('nav a').on('click', function(event) {
        event.preventDefault();
        let target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800); // Ajustez la durée de l'animation selon vos préférences
    });
})