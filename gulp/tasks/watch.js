module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./src/pug/**/*.pug', $.gulp.parallel('pug'));
        $.gulp.watch('./src/assets/scss/**/*.scss', $.gulp.parallel('styles:src'));
        $.gulp.watch('./src/assets/img/svg/*.svg', $.gulp.parallel('svg'));
        $.gulp.watch('./data/content.json', $.gulp.parallel('pug'));
        $.gulp.watch('./src/assets/js/**/*.js', $.gulp.parallel('libsJS:src', 'js:copy'));
        $.gulp.watch(['./src/assets/img/general/**/*.{png,jpg,gif}',
                     './src/assets/img/content/**/*.{png,jpg,gif}'], $.gulp.parallel('img:src'));
        $.gulp.watch(['./src/assets/img/general/**/*.svg',
                     './src/assets/img/content/**/*.svg'], $.gulp.parallel('svg:copy'));
    });
};
