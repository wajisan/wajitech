import path from 'path';
import fs from 'fs';

process.env.PORT = "3002";

export default {
    build: {
        standalone: true 
    },
    bridge: false,
    head: {
        script: {
            type: "text/javascript"
        },
        link: [
            { rel: 'icon', type: 'image/png', href: '~/assets/favicon.png' },
        ]
    },
    css: ['~/assets/css/global.css', '~/node_modules/bootstrap/dist/css/bootstrap.min.css'],
    fonts: ['~/assets/fonts/noe-display-bold.ttf'],
    plugins: ['~/plugins/bootstrap.client'],
    server: {
        port: 3002,
        host: '0.0.0.0', // Écoute sur toutes les interfaces
        https: {
            // key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
            // cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
        },
    },
    vite: {
        server: {
            https: true,
            host: true, // Écoute sur toutes les interfaces
            hmr: {
                protocol: 'wss',
                host: '0.0.0.0', // Ou 'localhost' si nécessaire
                clientPort: 9444 // Port exposé sur la machine hôte
            }
        }
    }
}