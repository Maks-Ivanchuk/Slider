document.addEventListener("DOMContentLoaded", () => {
   $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: '.slider-second',
      responsive: [
         {
            breakpoint: 769,
            settings: {
               arrows: false,
            }
         },
         {
            breakpoint: 376,
            settings: {
               dots: true,
               arrows: false,
               asNavFor: '',
            }
         }
      ]
   });

   $('.slider-second').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '40px',
      focusOnSelect: true,
      asNavFor: '.slider',
      dots: false,
      arrows: false,
      responsive: [
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 2,
               dots: true,
            }
         },
         {
            breakpoint: 376,
            settings: {
               asNavFor: '',
            }
         },
      ]
   });
});                                                              //працює
//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
// $(document).ready(function () {                           //працює
//    $('.slider').slick();
// });
//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
// $(function () {
//    $('.slider').slick();                                   //працює
// });
//-------------------------------------------------------------------------------