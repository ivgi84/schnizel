//depricated
var bs = require('browser-sync').create();
bs.init({
  proxy:'localhost/schnizel/app/'
});
bs.watch(['front-assets/css/*.css','front-assets/js/components/*/*.html']).on(bs.reload);
