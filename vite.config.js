import {resolve} from 'path' /* node */

export default{
    css: {
        devSourcemap: true // configuramos para ver la linea donde esta escrita la regla css
    },
    build: {
        rolluOptions: {
            input:{
                main: resolve(__dirname, 'index.html'),
                contacto: resolve(__dirname, 'src/pages/contacto/contacto.html'),
                nosotros: resolve(__dirname, 'src/pages/nosotros/nosotros.html')
            }
        }
    }
}