import axios from "axios";

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
})  


export const getPost = () =>{
    return api.get("/posts?_limit=10")
}

export const deletPost = (id) =>{
    return api.get(`/posts/${id}`)
}