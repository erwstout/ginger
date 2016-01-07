// Require Gulp
var gulp = require('gulp');

// Other Required Packages
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

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
});

// Default Task
gulp.task('default', ['cssnano']);
