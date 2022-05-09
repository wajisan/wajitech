import path from 'path';
import fs from 'fs';

process.env.PORT = "3002";
export default {
    target: 'static',
    router: { base: '' },
    head : {
      link: [
        { rel: 'icon', type: 'image/png', href: '~/assets/favicon.png' },
      ]
    },
    css: ['~/assets/css/global.css', '~/node_modules/bootstrap/dist/css/bootstrap.min.css'],
    fonts: ['~/assets/fonts/noe-display-bold.ttf'],
    plugins: ['~/plugins/bootstrap.client'],
    server: {
        //port : 3002,
        https: {
          key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
          cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
        },
    },
    vite: {
      server: {
        https: true,
        host: true,
        hmr: {
          protocol: 'wss',
          host: 'wajitech.fr',
          clientPort: 3002
        }
      }
    }
}
