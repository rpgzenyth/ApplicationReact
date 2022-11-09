import { get, post } from "../utils/api";

export const createGameroom = (data, token) => {
    const resp = post(`http://localhost:3131/api/v1/gameRoom`, data, token).then(
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
    const resp = get(`http://localhost:3131/api/v1/gameRooms`, token).then(
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
