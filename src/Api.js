import axios from 'axios'

export default() => {
    return axios.create({
        baseUrl: 'http://localhost:8082/api/v1/userAnalytics', 
        withCredentials: false
    })
}