import { get, put, post } from "../utils/api";

export const getCharacter = (id) => {
    const resp = get(`${process.env.REACT_APP_API_URL}/characters/${id}`).then(
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
    const resp = get(`${process.env.REACT_APP_API_URL}/characters/user`, token).then(
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
    const resp = post(`${process.env.REACT_APP_API_URL}/characters`, data, token).then(
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

export const updateCharacter = (data) => {
    const resp = put(`${process.env.REACT_APP_API_URL}/characters/${data._id}`, data).then(
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


