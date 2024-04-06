import axios from "axios";

const instance = axios.create({
    baseURL: 'https://valorant-api.com/v1'
})

export interface Response<T> {
    data: T[]
}

class ApiClient<T> {
    endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll() {
        return instance
            .get<T>(this.endpoint)
            .then(response => response.data)
    }
}

export default ApiClient