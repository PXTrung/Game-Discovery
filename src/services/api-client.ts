import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e1d568ec291b4c8abd8e64c39d7d7b02"
    }
})