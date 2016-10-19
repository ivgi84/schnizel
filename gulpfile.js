//https://www.browsersync.io/docs/gulp
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');
var livereload  = require('gulp-livereload');
var replace  = require('gulp-replace');
var minify  = require('gulp-minify');

// Static Server + watching less/html files
gulp.task('serve', ['less','html'], function() {

    browserSync.init({
        server: "./app"
    });

    livereload.listen();
    gulp.watch('app/front-assets/less/*.less', ['less']);
    gulp.watch('app/front-assets/js/components/*/*.html', ['html']);

});

gulp.task('less', function() {
  gulp.src('app/front-assets/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('app/front-assets/css'))
    .pipe(livereload({ start: true }));
});

gulp.task('html', function() {
  gulp.src('app/front-assets/js/components/*/*.html')
    .pipe(livereload());
});

gulp.task('default', ['serve']);


gulp.task('deploy-front', function(){
  gulp.src('app/front-assets/css/**/*.*')
  .pipe(replace('front-assets/',''))
  .pipe(gulp.dest('prod/css'));

  gulp.src('app/front-assets/js/**/*.*')
  .pipe(replace('front-assets/',''))
  // .pipe(minify({
  //   ext:{
  //     src:'-debug.js',
  //     min:'.js'
  //   },
  //   exclude: ['lib'],
  // }))
  .pipe(gulp.dest('prod/js'));

  gulp.src('app/front-assets/fonts/*.*')
  .pipe(gulp.dest('prod/fonts'));

  gulp.src('app/front-assets/images/**/*.*')
  .pipe(gulp.dest('prod/images'));

  gulp.src('app/*.*')
  .pipe(replace('front-assets/',''))
  .pipe(gulp.dest('prod/'));
});

gulp.task('deploy-back', function(){
  gulp.src('app/back-assets/data/*.json').pipe(gulp.dest('prod/back-assets/data/'));
});

gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(gulp.dest('./public'));
});

gulp.task('deploy',['deploy-front','deploy-back']);
