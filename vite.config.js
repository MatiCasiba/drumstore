import {resolve} from 'path' /* node */

export default{
    css: {
        devSourcemap: true // configuramos para ver la linea donde esta escrita la regla css
    },
    build: {
        rolluOptions: {
            input: resolve(__dirname, 'index.html')
        }
    }
}