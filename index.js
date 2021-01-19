import axios from 'axios'

export function callbackFun(fn) {
    return fn()
}

export function getData() {
    return axios.get('http://127.0.0.1:8087/example.json')
}

export const timer1 = (callback) => {
    setTimeout(() => {
        callback()
    }, 2000);
}

export const timer2 = (callback) => {
    setTimeout(() => {
        callback();
        setTimeout(() => {
            callback()
        }, 2000)
    }, 2000)
}


export const data1 = () => {
    return {
        name: 'Jsoning',
        age: 26,
        time: '2020.1.1'
    }
}

export const data2 = () => {
    return {
        name: 'Jsoning',
        age: 26,
        time: new Date()
    }
}