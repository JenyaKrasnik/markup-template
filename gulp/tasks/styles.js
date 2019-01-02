import { src, dest } from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import { routes } from '../routes';


const styles = () => {
  return src(routes.styles.src, {
        sourcemaps: true
    })
    .pipe(sass())
    .pipe(rename({
      basename: 'app',
      suffix: '.min'
    }))
    .pipe(dest(routes.styles.dest))
}


export { styles };