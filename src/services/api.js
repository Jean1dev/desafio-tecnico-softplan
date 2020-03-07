import axios from 'axios'
import MD5 from 'crypto-js/md5'

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/'
})

export function getCredentials() {
    const PRIV_KEY = '8c99fa1873ba391d134cc8dee2c50fe0bd3982e4'
    const PUBLIC_KEY = '365cf7ded78ded95d9cb52212d005c11'
    const ts = new Date().getTime()
    const hash = MD5(`${ts}${PRIV_KEY}${PUBLIC_KEY}`).toString()

    return {
        params: {
            ts,
            apikey: PUBLIC_KEY,
            hash
        }
    }
}

export default api