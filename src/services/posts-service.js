import axios from 'axios';

export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'
    }

    getPosts() {
        return axios.get("posts")
    }
}

export const  postsService = new PostService()