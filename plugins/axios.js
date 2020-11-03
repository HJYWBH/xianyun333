    // 在element-ui中解构出来Message，此时的Message就相当于this.message
 import { Message } from 'element-ui'
//  第一个参数是nuxt，在nuxt中解构出来$axiao
export default ({ $axios })=>{
    // 拦截$axios的错误请求
    $axios.onError((err)=>{
        const { message,statusCode } = err.response.data
        if(statusCode === 400){
            Message.error(message)
        }
    })
}