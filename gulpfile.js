var gulp = require('gulp');
var sherpa = require('style-sherpa');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('scss/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('styleguide/css'))
});

// Generate a style guide from the Markdown content
gulp.task('styleGuide', function() {
    sherpa('styleguide/index.md', {
        output: 'styleguide/styleguide.html',
        template: 'styleguide/template.hbs'
    } );
});