import axios, { AxiosError } from "axios";

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
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    static logout() {
        localStorage.removeItem("user");
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
        let user = localStorage.getItem("user");

        if (user) {
            return JSON.parse(user);
        } else {
            return null;
        }
    }

    static setVerified() {
        let user = this.getCurrentUser();
        user.verified = true;
        localStorage.setItem("user", JSON.stringify(user));
    }
}

export default AuthService;