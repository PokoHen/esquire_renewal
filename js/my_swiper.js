$(document).ready(function(){
    
    const swiper = new Swiper('.swiper-container', {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 50,
        
        breakpoints: {
            
            770:{
                allowTouchMove: true,
                slidesPerView: 3,
                spaceBetween: 50,
            },
            
            900: {
                allowTouchMove: false,
                slidesPerView: 1,
                spaceBetween: 0,
            }
        }
    });
    
});