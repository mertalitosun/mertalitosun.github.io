var paperMenu = {
    window: document.querySelector('#paper-window'),
    paperFront: document.querySelector('#paper-front'),
    hamburger: document.querySelector('.hamburger'),
    offset: 1800,
    pageHeight: document.querySelector('#paper-front').offsetHeight,
  
    open: function() {
      this.window.classList.add('tilt');
      this.hamburger.removeEventListener('click', this.open);
      document.querySelector('#container').addEventListener('click', this.close.bind(this));
      document.querySelector('.hamburger').addEventListener('click', this.close.bind(this));
      this.hamburgerFix(true);
      console.log('opening...');
    },
    close: function() {
      this.window.classList.remove('tilt');
      document.querySelector('#container').removeEventListener('click', this.close);
      document.querySelector('.hamburger').removeEventListener('click', this.close);
      this.hamburger.addEventListener('click', this.open.bind(this));
      this.hamburgerFix(false);
      console.log('closing...');
    },
    updateTransformOrigin: function() {
      var scrollTop = this.window.scrollTop;
      var equation = (scrollTop + this.offset) / this.pageHeight * 100;
      this.paperFront.style.transformOrigin = 'center ' + equation + '%';
    },
    hamburgerFix: function(opening) {
      if (opening) {
        document.querySelector('.hamburger').style.position = 'absolute';
        document.querySelector('.hamburger').style.top = this.window.scrollTop + 30 + 'px';
      } else {
        setTimeout(function() {
          document.querySelector('.hamburger').style.position = 'fixed';
          document.querySelector('.hamburger').style.top = '30px';
        }, 300);
      }
    },
    bindEvents: function() {
      this.hamburger.addEventListener('click', this.open.bind(this));
      document.querySelector('.close').addEventListener('click', this.close.bind(this));
      this.window.addEventListener('scroll', this.updateTransformOrigin.bind(this));
    },
    init: function() {
      this.bindEvents();
      this.updateTransformOrigin();
    },
  };
  
  paperMenu.init();
  