module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: './build',
            port: 8080,
            notify: false,
            open: false
        });
    });
};
