var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    filter = require('gulp-filter'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    run = require('gulp-run'),
    browserSync = require('browser-sync').create();

function js() {
    var files = [
        'bower_components/material-design-lite/material.min.js',
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/packery/dist/packery.pkgd.min.js',
        'bower_components/flickity/dist/flickity.pkgd.min.js',
        'bower_components/clipboard/dist/clipboard.min.js',
        'bower_components/anchor-js/anchor.min.js',
        'bower_components/mustache/mustache.min.js',
        'bower_components/lunr.js/lunr.js',
        'bower_components/photoswipe/dist/photoswipe.min.js',
        'bower_components/photoswipe/dist/photoswipe-ui-default.min.js',
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
}

function css() {
    var files = [
        // 'bower_components/material-design-lite/material.min.css',
        'bower_components/flickity/dist/flickity.min.css',
        'bower_components/photoswipe/dist/photoswipe.css',
        'bower_components/photoswipe/dist/default-skin/default-skin.css',
        'css/*.css',
        'css/main.scss'
    ];

    var scss = filter('css/*.scss', {restore: true});

    return gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(scss)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(scss.restore)
        .pipe(cleanCSS({keepSpecialComments: 0, rebase: false}))
        .pipe(concat('almost-all.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'));
}

function images() {
    var files = [
        'bower_components/photoswipe/dist/default-skin/*.{svg,png,gif}'
    ];

    return gulp.src(files)
        .pipe(gulp.dest('assets'));
}

function browser(cb) {
    browserSync.reload();
    cb();
}

function jekyllBuild(incremental) {
    var command = 'bundle exec jekyll build';

    if (incremental) {
        command += ' --incremental';
    }

    return run(command).exec().on('error', gutil.log);
}

function jekyll() {
    browserSync.notify("'jekyll build' is running", 10000);

    return jekyllBuild();
}

function jekyllIncremental() {
    browserSync.notify("'jekyll build -I' is running", 10000);

    return jekyllBuild(true);
}

const fullRefresh = gulp.series(jekyll, browser);
const partialRefresh = gulp.series(jekyllIncremental, browser);

function serve() {
    browserSync.init({
        server: '_site',
        open: false
    });

    gulp.watch(['js/*'], js);
    gulp.watch(['css/**/*'], css);
    gulp.watch(['_data/**/*', '_includes/**/*', 'assets/*', 'images/**/*'], fullRefresh);
    gulp.watch(['_layouts/*', '_posts/*', 'm1/**/*', 'm2/**/*'], partialRefresh);
}

exports.default = gulp.series(jekyll, serve);
exports.assets = gulp.parallel(js, css, images);
