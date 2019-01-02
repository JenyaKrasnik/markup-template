import { watch, series } from 'gulp';
import { reload } from './server';
import { styles } from './styles';
import { scripts } from './scripts';
import { html } from './html';
import { routes } from '../routes';

const watchStyles = () => {
  return watch(routes.styles.src, series(styles, reload));
}

const watchScripts = () => {
  return watch(routes.scripts.src, series(scripts, reload));
};

const watchHTML = () => {
  return watch(routes.html.src, series(html, reload));
}

export { watchStyles, watchScripts, watchHTML };