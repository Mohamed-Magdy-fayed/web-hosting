import axios from 'axios'

axios.defaults.withCredentials = true

export const registerUser = async (name, email, password) => {
    const data = {
        name,
        email,
        password
    };

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '/api/users/register',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return await axios(config)
}

export const loginUser = async (email, password) => {
    const data = {
        email,
        password,
    };

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '/api/users/login',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    };

    return await axios(config)
}

export const logoutUser = async () => {
    const config = {
        method: 'post',
        url: '/api/users/logout',
    };

    return await axios(config)
}

export const checkAuth = async () => {
    const config = {
        method: 'get',
        url: '/api/users/checkauth',
    };

    return await axios(config)
}

export const resetPassword = async (email) => {
    const config = {
        method: 'post',
        url: '/api/users/reset-password/request',
        headers: {
            'Content-Type': 'application/json',
        },
        data: { email }
    };

    return await axios(config)
}

export const resetPasswordLink = async (password, token) => {
    const config = {
        method: 'post',
        url: '/api/users/reset-password/response',
        headers: {
            'Content-Type': 'application/json',
        },
        data: { password, token }
    };

    return await axios(config)
}