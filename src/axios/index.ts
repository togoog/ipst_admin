const JsonP = require('jsonp') //  TSLint: require statement not part of an import statement (no-var-requires) 
// const JsonP = require('jsonp')
interface IOptions {
    url:string
}
interface IWeatherAPIRes {
    status:string
    message:string
}
export default class Axios {
    // static,静态属性在类本身，而不是在实例上
    public jsonp(options:IOptions) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                params:'callback' // 跨域，callback接收
            }, (err:any, response:IWeatherAPIRes) => {
                if (err) {
                    reject(err)
                    return
                }
                if (response.status === 'success') {
                    resolve(response)
                } else {
                    reject(response.message)
                }
            })
        })
    }
} 