'use strict';

import gulp from 'gulp';
import { styles } from './gulp/tasks/styles';
import { scripts } from './gulp/tasks/scripts';
import { html } from './gulp/tasks/html';
import { 
  watchStyles, 
  watchScripts, 
  watchHTML
} from './gulp/tasks/watch';
import { serve } from './gulp/tasks/server';


const build = gulp.parallel(
  html,
  styles, 
  scripts, 
  serve,
  watchStyles, 
  watchScripts, 
  watchHTML
);

gulp.task(build);
gulp.task('default', build);