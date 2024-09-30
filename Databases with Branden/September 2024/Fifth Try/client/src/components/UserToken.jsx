import { useState } from "react";

function UserToken() {
    // Get the token from localStorage
    function getToken() {
        const tokenString = localStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    // Initialize token state
    const [token, setToken] = useState(getToken());

    // Save the token to localStorage and update the state
    function saveToken(userToken) {
        localStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken);
    }

    // Remove the token from localStorage and clear the state
    function removeToken() {
        localStorage.removeItem("token");
        setToken(null);
    }

    return {
        setToken: saveToken, // This is where the setToken function comes from
        token,
        removeToken,
    };
}

export default UserToken;
