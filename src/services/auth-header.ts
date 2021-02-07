export const authHeader = () => {
    let user = sessionStorage.getItem("user");

    if (user && JSON.parse(user).accessToken) {
        return { 
            "auth": JSON.parse(user).accessToken 
        };
    } else {
        return {};
    }
}