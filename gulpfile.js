var gulp= require('gulp');
var sass= require('gulp-sass');
var browserSync= require('browser-sync');
var reload= browserSync.reload;


gulp.task('sass', function(){
    gulp.src('scss/landing-page.scss')
    .pipe(sass({
        includedPaths: ['scss']
    }))
    .pipe(gulp.dest('css'));

});

gulp.task('serve', ['sass'], function(){
    browserSync.init(['css/*.css', '*.html'], {
        server:{
            baseDir: ''
        }
    })
});

gulp.task('default', ['serve']);