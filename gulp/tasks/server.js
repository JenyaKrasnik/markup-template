import { src, watch } from 'gulp';
import browserSync from 'browser-sync';
import { routes } from '../routes';

const server = browserSync.create();

const reload = done => {
  server.reload();
  done();
}

const serve = done => {
  server.init({
    server: {
      baseDir: routes.localServer.baseDir,
      middleware: [{
        route: "/",
        handle: (req, res, next) => {
          res.writeHead(302,  { "Location": routes.localServer.location })                                                                                                                                                                
          res.end()
          next()
        }
      }]
    }
  });
  done();
};

export { serve, reload };