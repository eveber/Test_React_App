import React from "react";
import * as axios from "axios";

//Instance for previous query settings
const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'af36aa18-3373-4795-b041-caeb2d343bec'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

//Users api
export const usersAPI = {

    requestUsers(page, pageSize) {
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
    },

    saveAvatar(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data) // return clear data
    }
};

//Authorization API
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data) // return clear data
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data) // return clear data
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data) // return clear data
    }
};

