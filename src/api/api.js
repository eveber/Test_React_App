import React from "react";
import * as axios from "axios";

//Instance for previous query settings
const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '91ccb4bc-a096-4d5c-868b-2a07fb7ea415'
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
    },

    getProfile(userId) {
        //debugger;
        return instance.get(`profile/` + userId)
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
