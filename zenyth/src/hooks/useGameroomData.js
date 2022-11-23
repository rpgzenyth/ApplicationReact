import { get, post, put } from "../utils/api";

export const createGameroom = (data, token) => {
    const resp = post(`${process.env.REACT_APP_API_URL}/gameRoom`, data, token).then(
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


export const getGamerooms = (token) => {
    const resp = get(`${process.env.REACT_APP_API_URL}/gameRooms`, token).then(
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


export const joinGameroom = (data, token) => {
    const resp = put(`${process.env.REACT_APP_API_URL}/gameRoom`, data, token).then(
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