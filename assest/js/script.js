// swiper section start

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3, 
  

    autoplay: {
        delay: 4000,  // 3000 milliseconds (3 seconds) ke baad next slide
        disableOnInteraction: false,  // User interaction ke baad bhi autoplay chalu rahe
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },


    breakpoints:{

      0: {
        slidesPerView:1
      },

      576: {
        slidesPerView:1
      },

      768: {
        slidesPerView:2
      },

      1200: {
        slidesPerView:3
      },
    }


  });

  // swiper section end




  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,

    autoplay: {
      delay: 2000,  // 3000 milliseconds (3 seconds) ke baad next slide
      disableOnInteraction: false,  // User interaction ke baad bhi autoplay chalu rahe
  },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    breakpoints:{

      0: {
        slidesPerView:1
      },

      576: {
        slidesPerView:1
      },

      768: {
        slidesPerView:2
      },

      1200: {
        slidesPerView:2
      },
    }
  });