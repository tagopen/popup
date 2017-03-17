(function($) {
  "use strict";
  $('.pp-modal-link').on('click', function (e) {
    var $modalToggle   = $(this),
      modalTarget    = $modalToggle.attr('href'),
      $modal         = $('.pp-modal'),
      $body          = $('body'),
      $backdrop      = $body.find('oh-backdrop') || null,
      backdropHtml   = '<div class="oh-backdrop"></div>',
      $backdrop      = $body.find('.oh-backdrop');

    if (!($backdrop.length)) {
      $body.append(backdropHtml);
    }
  $body.find('.oh-backdrop').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
    function(){ 
      $modal
        .removeClass('pp-modal--open')
        .filter(modalTarget)
        .addClass('pp-modal--open');
    });

  e.preventDefault();
  });

  $('.pp-modal, .pp-modal__close').on('click', function(e) {
    var $body          = $('body'),
        $backdrop      = $body.find('.oh-backdrop') || null;

    $('.pp-modal').removeClass('pp-modal--open');

    if ($backdrop.length) {
      $backdrop.remove();
    }

  e.preventDefault();
  }).children().click(function(e) {
    return false;
  });;  

  $('.pp-modal-link').on('click', function (e) {
    var $modalToggle   = $(this),
      modalTarget    = $modalToggle.attr('href'),
      $modal         = $('.pp-modal');

    $modal
      .removeClass('pp-modal--open')
      .filter(modalTarget)
      .addClass('pp-modal--open');
    e.preventDefault();
  });

  $('.pp-modal').on('click', function(e) {
    $(this).removeClass('pp-modal--open');
    e.preventDefault();
  }).children().click(function(e) {
    return false;
  });
  

})(jQuery);