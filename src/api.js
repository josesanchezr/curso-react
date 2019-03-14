import axios from 'axios'

export default {
    characters: {
        fetchAll: () => axios.get("/api/character").then(res => res.data),
        create: character => axios.post("/api/character",character).then(res => res.data),
    }
}