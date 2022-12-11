import axios from "axios";

const api = axios.create({

    baseURL:'https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}'
})

export default api