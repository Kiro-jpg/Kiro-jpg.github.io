window.sr = ScrollReveal();

sr.reveal('.jm1', {
    duration: 3500,
    origin: 'bottom',
    distance: '400px'
});

sr.reveal('.jm2', {
    duration: 3500,
    origin: 'bottom',
    distance: '650px'
});

sr.reveal('.jm3', {
    duration: 3500,
    origin: 'bottom',
    distance: '900px'
});

sr.reveal('.jm4', {
    duration: 3500,
    origin: 'bottom',
    distance: '1150px'
});

sr.reveal('.jm5', {
    duration: 3500,
    origin: 'bottom',
    distance: '1650px'
});

sr.reveal('.jmleg', {
    duration: 3500,
    origin: 'left',
    distance: '1900px'
});

sr.reveal('.jmleg2', {
    duration: 3500,
    origin: 'bottom',
    distance: '2150px'
});

sr.reveal('.jmleg3', {
    duration: 3500,
    origin: 'right',
    distance: '2400px'
});
var section = $('.asd');

function toggleAccordion() {
    section.removeClass('active');
    $(this).addClass('active');
}

section.on('click', toggleAccordion);