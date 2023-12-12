$(document).ready(function () {
    let sections = $('.view');
    let currentSectionIndex = 0;
    let isScrolling = false;

    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) {
            return;
        }

        currentSectionIndex = index;
        let targetPosition = sections.eq(index).offset().top;

        $('html, body').stop().animate({
            scrollTop: targetPosition
        }, 1000); // Durée de l'animation en millisecondes (ajustez selon vos préférences)
    }

    scrollToSection(currentSectionIndex);

    $(window).on('wheel', function (e) {
        if (isScrolling) {
            e.preventDefault();
            return;
        }

        isScrolling = true;

        if (e.originalEvent.deltaY > 0) {
            scrollToSection(currentSectionIndex + 1);
        } else if (e.originalEvent.deltaY < 0) {
            scrollToSection(currentSectionIndex - 1);
        }

        setTimeout(function () {
            isScrolling = false;
        }, 1000); // Empêche d'autres actions pendant 1 seconde après chaque coup de molette
    });
});
