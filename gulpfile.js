var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    filter = require('gulp-filter'),
    concat = require('gulp-concat');

gulp.task('js', function () {
    var files = [
        'bower_components/material-design-lite/material.min.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/packery/dist/packery.pkgd.min.js',
        'bower_components/flickity/dist/flickity.pkgd.min.js',
        'bower_components/anchor-js/anchor.min.js',
        'bower_components/mustache/mustache.min.js',
        'bower_components/lunr.js/lunr.min.js',
        'js/*'
    ];
    var local = filter('js/*.js', {restore: true});
    return gulp.src(files)
        .pipe(local)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(local.restore)
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('assets'));
});

gulp.task('css', function () {
    var files = [
        // 'bower_components/material-design-lite/material.min.css',
        'bower_components/flickity/dist/flickity.min.css',
        'css/*'
    ];
    var scss = filter('css/*.scss', {restore: true});
    return gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(scss)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(scss.restore)
        .pipe(cleanCSS({keepSpecialComments: 0}))
        .pipe(concat('almost-all.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'));
});

gulp.task('default', ['js', 'css']);

gulp.watch('js/*', ['js']);
gulp.watch('css/*', ['css']);
