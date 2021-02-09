import axios from "axios";

const API_URL = `https://duty-calendar-api.herokuapp.com/auth/`;

class AuthService {
    static login(email: string, password: string) {
        return axios
            .post(API_URL + "login", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    sessionStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    static logout() {
        sessionStorage.removeItem("user");
    }

    static register(email: string, password: string) {
        return axios.post(API_URL + "register", {
            email,
            password
        });
    }

    static verifyEmail(code: string, id: string) {
        return axios.post(API_URL + "verify", {
            userId: id,
            secretCode: code
        });
    }

    static getCurrentUser() {
        let user = sessionStorage.getItem("user");

        if (user) {
            return JSON.parse(user);
        } else {
            return null;
        }
    }
}

export default AuthService;