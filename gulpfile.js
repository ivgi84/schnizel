//https://www.browsersync.io/docs/gulp
var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    less        = require('gulp-less'),
    livereload  = require('gulp-livereload'),
    replace  = require('gulp-replace'),
    minify  = require('gulp-minify'),
    uglify = require('gulp-uglify'),
    concatCSS = require('gulp-concat-css'),
    cleanCss = require('gulp-clean-css');

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
    gulp.src('app/front-assets/css/**/*.*') //css
    .pipe(replace('front-assets/',''))
    //.pipe(cleanCss())
    .pipe(gulp.dest('prod/css'));

    gulp.src(['app/front-assets/js/**/*.js', '!app/front-assets/js/lib/**/*.js'])
    .pipe(replace('front-assets/',''))
    //.pipe(uglify())
    .pipe(gulp.dest('prod/js'));

    gulp.src('app/front-assets/js/lib/**/*.js')
    .pipe(replace('front-assets/',''))
    .pipe(gulp.dest('prod/js/lib'));

    gulp.src('app/front-assets/js/**/*.html')
    .pipe(replace('front-assets/',''))
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
    gulp.src('app/back-assets/**/*.*')
    .pipe(replace('front-assets/',''))
    .pipe(gulp.dest('prod/back-assets/'));
});

gulp.task('deploy',['deploy-front','deploy-back']);
