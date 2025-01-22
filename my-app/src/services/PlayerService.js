import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/players';

class PlayerService {
    getAllPlayers() {
        return axios.get(API_URL);
    }

    getPlayerById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createPlayer(player) {
        return axios.post(API_URL, player);
    }

    updatePlayer(id, player) {
        return axios.put(`${API_URL}/${id}`, player);
    }

    deletePlayer(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

const playerServiceInstance = new PlayerService();
export default playerServiceInstance;