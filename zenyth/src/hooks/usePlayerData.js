import { post, get } from "../utils/api";

export const login = (token) => {
    const resp = post(`${process.env.REACT_APP_API_URL}/login`, token).then(
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

export const register = (token) => {
    const resp = post(`${process.env.REACT_APP_API_URL}/players`, token).then(
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


export const getPlayer = (token) => {
    const resp = get(`${process.env.REACT_APP_API_URL}/players/get-player`, token).then(
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
