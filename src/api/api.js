import React from "react";
import * as axios from "axios";

//instanse for previous querry settings
const instance = axios.create ({
    withCredentials: true,
    headers: {
        'API-KEY': '91ccb4bc-a096-4d5c-868b-2a07fb7ea415'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

//USERS
export const getUsers = (page, pageSize) => {
    return  instance.get(`users?page=${page}&count=${pageSize}`)
        .then(response => response.data) // return clear data
}

//FOLLOW / UNFOLLOW
export const unFollow = (userId) => {
    return  instance.delete(`follow/` + userId)
        .then(response => response.data) // return clear data
}

export const follow = (userId) => {
    return  instance.post(`follow/` + userId)
        .then(response => response.data) // return clear data
}

//AUTH
export const auth = () => {
    return  instance.get(`auth/me`)
        .then(response => response.data) // return clear data
}

//PROFILE
export const getProfile = (userId) => {
    return  instance.get(`profile/` + userId)
        .then(response => response.data) // return clear data
}


