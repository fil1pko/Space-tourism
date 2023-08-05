var swiper = new Swiper(".mySwiper", {
   //  direction: "horizontal",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


var swiper2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

    






