import React from "react";
import * as axios from "axios";

//Instance for previous query settings
const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '96dab36c-f990-45a9-8a90-19be4e62f667'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

//Users api
export const usersAPI = {

    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data) // return clear data
    },

    unFollow(userId) {
        return instance.delete(`follow/` + userId)
            .then(response => response.data) // return clear data
    },

    follow(userId) {
        return instance.post(`follow/` + userId)
            .then(response => response.data) // return clear data
    }
};

//Profile Api
export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data) // return clear data
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data) // return clear data
    },

    updateUserStatus(userStatus) {
        return instance.put(`profile/status`, {status: userStatus})
            .then(response => response.data) // return clear data
    }
};

//Authorization API
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data) // return clear data
    }
};
