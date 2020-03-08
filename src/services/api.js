import axios from 'axios'
import MD5 from 'crypto-js/md5'

const PRIV_KEY = process.env.MARVEL_PRI_KEY
const PUBLIC_KEY = process.env.MARVEL_PUB_KEY

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/'
})

export function getCredentials() {
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

export function getCredentialsString() {
    const ts = new Date().getTime()
    const hash = MD5(`${ts}${PRIV_KEY}${PUBLIC_KEY}`).toString()
    return `?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
}

export default api