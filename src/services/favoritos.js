import axios from "axios";


const favoritosApi = axios.create({
    baseURL: "http://localhost:8000/favoritos",
});

async function getFavoritos() {
    const response = await favoritosApi.get('/')

    return response.data
}

async function postFavoritos(id) {
    await favoritosApi.post(`/${id}`)
}

async function deleteFavoritos(id) {
    await favoritosApi.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}