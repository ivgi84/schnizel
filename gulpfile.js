//https://www.browsersync.io/docs/gulp
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');
var livereload  = require('gulp-livereload');

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


gulp.task('deploy', function(){
  gulp.src('app/front-assets/css/*.css')
  .pipe(gulp.dest('prod/css'));
});
