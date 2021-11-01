var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    filter = require('gulp-filter'),
    concat = require('gulp-concat'),
    cp = require('child_process'),
    browserSync = require('browser-sync').create();

function js() {
    var files = [
        'node_modules/material-design-lite/material.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/packery/dist/packery.pkgd.min.js',
        'node_modules/flickity/dist/flickity.pkgd.min.js',
        'node_modules/clipboard/dist/clipboard.min.js',
        'node_modules/anchor-js/anchor.min.js',
        'node_modules/mustache/mustache.min.js',
        'node_modules/lunr/lunr.js',
        'node_modules/photoswipe/dist/photoswipe.min.js',
        'node_modules/photoswipe/dist/photoswipe-ui-default.min.js',
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
        // 'node_modules/material-design-lite/material.min.css',
        'node_modules/flickity/dist/flickity.min.css',
        'node_modules/photoswipe/dist/photoswipe.css',
        'node_modules/photoswipe/dist/default-skin/default-skin.css',
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
        'node_modules/photoswipe/dist/default-skin/*.{svg,png,gif}'
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

    return cp.exec(command);
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
    gulp.watch(['_layouts/*', '_posts/*', 'm1/**/*', 'm2/**/*', 'shopify/**/*'], partialRefresh);
}

exports.default = gulp.series(jekyll, serve);
exports.assets = gulp.parallel(js, css, images);
