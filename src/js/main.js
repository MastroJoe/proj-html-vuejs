Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
  // creo struttura dati con i link
  data: {
    // HEADER
    navbarImg: [
      {
        name: '',
        link: '#'
      }
    ],
    navbarIcons: [
      {
        name: 'shopping-cart',
        link: '#'
      },
      {
        name: 'bars',
        link: '#'
      },
    ],
    // FOOTER
    socialIcons: [
      {
        name: 'facebook-f',
        link: '#'
      },
      {
        name: 'twitter',
        link: '#'
      },
      {
        name: 'youtube',
        link: '#'
      },
      {
        name: 'instagram',
        link: '#'
      },
    ],
<<<<<<< HEAD

    // BUTTONS
    // LOGO
    btnLogo: [
      {
        link: '#'
      }
    ],
    // FOOTER
    btnShop: [
      {
        name: 'shop our range now',
        link: '#'
      }
    ],
    btnBooking: [
      {
        name: 'book your appointment',
        link: '#'
      }
    ]
=======
>>>>>>> master
  }
});
