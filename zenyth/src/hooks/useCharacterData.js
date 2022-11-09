import { get, put, post } from "../utils/api";

export const getCharacter = (id) => {
    const resp = get(`http://localhost:3131/api/v1/characters/${id}`).then(
        (response) => {
            if (response.status !== 200) {
                console.warn("Request failed. Status code: " + response.status);
                return;
            }
            return response.json();
        }
    );
    return resp;
};

export const getCharactersByUser = (token) => {
    const resp = get(`http://localhost:3131/api/v1/characters/user`, token).then(
        (response) => {
            if (response.status !== 200) {
                console.warn("Request failed. Status code: " + response.status);
                return;
            }
            return response.json();
        }
    );
    return resp;
};

export const createCharacter = (data, token) => {
    const resp = post(`http://localhost:3131/api/v1/characters`, data, token).then(
        (response) => {
            if (response.status !== 200) {
                console.warn("Request failed. Status code: " + response.status);
                return;
            }
            return response.json();
        }
    );
    return resp;
};

export const updateCharacter = (id, data) => {
    const resp = put(`http://localhost:3131/api/v1/characters/${id}`, data).then(
        (response) => {
            if (response.status !== 200) {
                console.warn("Request failed. Status code: " + response.status);
                return;
            }
            return response.json();
        }
    );
    return resp;
};


