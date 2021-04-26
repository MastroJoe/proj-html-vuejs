Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
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
  }
});
