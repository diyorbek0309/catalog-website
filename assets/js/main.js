/*
@author Diyorbek Olimov https://diyorbek.me
*/
(function($) {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back').fadeIn('slow');} else {$('.back').fadeOut('slow');}
  });

  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-filters li').on('click', function() {
      $("#portfolio-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  $(document).ready(function() {
    $('.venobox').venobox();
  });

  $(".bir").click(function () {
    $(this).addClass('active');
    $(".ikki, .uch, .tort").removeClass("active");
    $(".first").slideToggle();
  })

  $(".ikki").click(function () {
    $(this).addClass('active');
    $(".bir, .uch, .tort").removeClass("active");
    $(".second").slideToggle();
  })

  $(".uch").click(function () {
    $(this).addClass('active');
    $(".ikki, .bir, .tort").removeClass("active");
    $(".third").slideToggle();
  })

  $(".tort").click(function () {
    $(this).addClass('active');
    $(".ikki, .uch, .bir").removeClass("active");
    $(".fourth").slideToggle();
  })



  $('.back').click(function() {$('html, body').animate({scrollTop: 0}, 2000, 'easeInOutExpo');return false;});
})(jQuery);

