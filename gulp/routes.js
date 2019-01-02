const routes = {
  localServer: {
    baseDir: './',
    location: '../../dist/html/index.html'
  },
  styles: {
    src: 'src/styles/app.scss',
    dest: 'dist/styles/'
  },
  scripts: {
    src: 'src/js/*.js',
    dest: 'dist/js/'
  },
  html: {
    src: 'src/pages/*.pug',
    dest: 'dist/html/'
  }
}

export { routes };