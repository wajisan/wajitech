import path from 'path';
import fs from 'fs';

export default {
    css: ['~/assets/css/global.css', '~/node_modules/bootstrap/dist/css/bootstrap.min.css'],
    fonts: ['~/assets/fonts/noe-display-bold.ttf'],
    plugins: ['~/plugins/bootstrap.client'],
    server: {
        https: {
          key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
          cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
        }
      }
}
