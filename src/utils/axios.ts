import axios from 'axios'
import type {AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios'

const axiosInstance = axios.create({
    baseURL: '',
    timeout: 2000
})

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (error: AxiosError) => {
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    return response
}, (error: AxiosError) => {
    return Promise.reject(error)
})

export default axiosInstance