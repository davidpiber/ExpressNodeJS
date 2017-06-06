let gulp = require('gulp');
let jshint = require('gulp-jshint');
let jscs = require('gulp-jscs');
let nodemon = require('gulp-nodemon');
let jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', () => {
   return gulp.src(jsFiles).pipe(jshint()).pipe(jshint.reporter('jshint-stylish', {
        verbose: true
    }))
    .pipe(jscs());
});

gulp.task('serve', ['style'], () => {
    let options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles 
    };

    return nodemon(options).on('restart', (ev) => {
        console.log('Restarting...');
    });
});

