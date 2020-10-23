const { series } = require('gulp');
var minify = require('gulp-minify');

function compress(cb) {
  return gulp.src('lib/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
}


exports.default = series(compress);