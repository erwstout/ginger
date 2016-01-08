// Require Gulp
var gulp = require('gulp');

// Other Required Packages
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

// Compile Sass
gulp.task('sass', function(){
  gulp.src('./ginger.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
    .pipe(gulp.dest('./dist'));
});

// Minify Css
gulp.task('cssnano', ['sass'], function(){
  gulp.src('./dist/ginger.css')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cssnano({
      discardComments: {removeAllButFirst: true}
    }))
    .pipe(gulp.dest('./dist'));
});

// Minify JS
gulp.task('scripts', function(){
  gulp.src('./js/ginger.js')
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

// Default Task
gulp.task('default', ['cssnano']);
