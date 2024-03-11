const { src, dest, watch, parallel } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const ghPages = require('gh-pages');
const path = require('path');

const browserSync = require('browser-sync').create();

function scripts() {
  return src([
    'app/js/dropleft.js', 
    'app/js/dropdown.js',
    'app/js/charts.js', 
    'app/js/tippy.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src([
    'app/scss/sidebar.scss',
    'app/scss/dropdown.scss',
    'app/scss/dropleft.scss',
    'app/scss/profile.scss',
    'app/scss/affairs.scss',
    'app/scss/style.scss'
  ])
    .pipe(concat('style.min.css'))
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function watching() {
  watch([
    'app/scss/sidebar.scss',
    'app/scss/dropdown.scss', 
    'app/scss/dropleft.scss',
    'app/scss/profile.scss',
    'app/scss/affairs.scss',
    'app/scss/style.scss'
  ], styles)
  watch([
    'app/js/dropleft.js', 
    'app/js/dropdown.js', 
    'app/js/charts.js', 
    'app/js/tippy.js'
  ], scripts)
  watch(['app/*.html']).on('change', browserSync.reload)
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/"
    }
  });
}

function build() {
  return src([
    'app/css/style.min.css',
    'app/js/main.min.js',
    'app/fonts/*',
    'app/img/*/*/*',
    'app/*.html'
  ], {base: 'app'})
    .pipe(dest('dist'))
}

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), './dist'), cb);
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.build = build;
exports.deploy = deploy;

exports.default = parallel(styles, scripts, browsersync, watching)