Vue.config.devtools = true;

var app = new Vue ({
  el: '#root',
  data: {
    // HEADER
    navbarImg: [
      {
        name: 'Home',
        link: '#'
      }
    ],
    navbarIcons: [
      {
        name: 'shopping-cart',
        link: '#'
      },
      {
        name: 'bag',
        link: '#'
      },
    ],
    // FOOTER  
  }
});
