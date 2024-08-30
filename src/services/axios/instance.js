import axios from 'axios'
import useUserStore from '../../store/user.store'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
})

instance.interceptors.request.use(
    (config) => {
        const accessToken = useUserStore.getState().accessToken

        if (accessToken) {
            config.headers.Authorization = 'Bearer ' + accessToken
        }

        return config
    }
)

export default instance