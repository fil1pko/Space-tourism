var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


let checkbox = document.getElementById('menyAvPaa');
        let pagination = document.getElementById('pagination');
        let slider = document.getElementById('swiper');
        
        checkbox.addEventListener( "change", () => {
         if ( checkbox.checked ) {
            slider.style.zIndex="-1";
            pagination.style.zIndex="-1";
         } else {
            slider.style.zIndex="25";
            pagination.style.zIndex="26";
         }
      });