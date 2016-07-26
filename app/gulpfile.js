//https://www.browsersync.io/docs/gulp
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var less        = require('gulp-less');

// Static Server + watching less/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("front-assets/less/*.less", ['less']);
    gulp.watch("front-assets/less/*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src("front-assets/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("front-assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
