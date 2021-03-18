// GOAL: Creare un hamburger menu con l'utilizzo di Html, Css e JavaScript. Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.


$('.fas.fa-bars, .fas.fa-times').click(function () {

  $('.hamburger-menu').toggleClass('active');

})
