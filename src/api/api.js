import React from "react";
import * as axios from "axios";
import {getCaptcha} from "../redux/auth-reducer";

//Instance for previous query settings
const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '93c267b5-5b93-4225-bc41-d44947558d7f'
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
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data) // return clear data
    }
};

//Authorization API
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data) // return clear data
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data) // return clear data
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data) // return clear data
    }
};

export const sequrityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
            .then(response => response.data) // return clear data
    }
};

