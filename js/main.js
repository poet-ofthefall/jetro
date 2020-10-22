 $(document).ready(function(){

   $('.slider').slick({
   slidesToShow: 1,
   fade: true,
   asNavFor: '.thumbs', 
   // nextArrow: <button type="button" class="slick-next"><img src="images/slider/next.png" alt=""></button>,
   // prevArrow: <button class="slick-prev"><img src="images/slider/prev.png" alt=""></button>,  
 });
 $('.thumbs').slick({
   slidesToShow: 6,
   slidesToScroll: 6,
   infinite: true,
   asNavFor: '.slider',
   dots: false,
   focusOnSelect: true
 });
 });
          