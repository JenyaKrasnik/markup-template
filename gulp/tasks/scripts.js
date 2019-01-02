import { src, dest } from 'gulp';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import { routes } from '../routes';

const scripts = () => (
  src(routes.scripts.src, {
    sourcemaps: true
  })
  .pipe(uglify())
  .pipe(concat('main.min.js'))
  .pipe(dest(routes.scripts.dest))
)

export { scripts };