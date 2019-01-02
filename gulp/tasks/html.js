import { src, dest } from 'gulp';
import pug from 'gulp-pug';
import { routes } from '../routes';

const html = () => {
  return src(routes.html.src)
    .pipe(pug({
      pretty: true
    }))
    .pipe(dest(routes.html.dest))
}

export { html };