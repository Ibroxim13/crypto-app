import { cryptoData, cryptoAssests } from "./data"

export function fakeFetchCrypto() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 2000)
    })
}

export function fetchAssests() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoAssests)
        }, 2000)
    })
}