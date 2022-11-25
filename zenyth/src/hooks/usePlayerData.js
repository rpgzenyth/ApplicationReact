import { post } from "../utils/api";

export const login = (token) => {
    const resp = post(`http://localhost:3131/api/v1/login`, token).then(
        (response) => {
            console.log(response)
            if (response.status !== 200) {
                console.warn("Request failed. Status code: " + response.status);
                return;
            }
            return response.json();
        }
    );
    return resp;
};

