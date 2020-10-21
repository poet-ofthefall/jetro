 $(document).ready(function(){

   $('.slider__top').slick({
   slidesToShow: 1,
   fade: true,
   
   asNavFor: '.slider__bottom', 
   // nextArrow: <button type="button" class="slick-next"><img src="images/slider/next.png" alt=""></button>,
   // prevArrow: <button class="slick-prev"><img src="images/slider/prev.png" alt=""></button>,  
 });
 $('.slider__bottom').slick({
   slidesToShow: 6,
   infinite: true,
   asNavFor: '.slider__top',
   dots: false,
   centerMode: true,
   focusOnSelect: true
 });
 });
          