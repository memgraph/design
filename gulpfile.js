var gulp = require('gulp');
var sherpa = require('style-sherpa');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('src/scss/memgraph-foundation.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/styleguide/css'))
});

// Generate a style guide from the Markdown content
gulp.task('styleGuide', function() {
    sherpa('src/styleguide/index.md', {
        output: 'src/styleguide/styleguide.html',
        template: 'src/styleguide/template.hbs'
    } );
});