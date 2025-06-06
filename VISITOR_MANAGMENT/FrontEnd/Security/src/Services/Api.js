import Cookies from "js-cookie";
import { commonrequest } from "./CommonRequest";
import { BACKEND_URL } from "./Helpers";

export const postRequest = async (endpoint, data, headers = {}, params = {}) => {
    // console.log('data', data);
    try {
        const response = await commonrequest("POST", `${BACKEND_URL}/${endpoint}`, data, headers, params);
        return response;
    } catch (error) {
        throw new Error(`Error in POST request to ${endpoint}`);
    }
};

export const postRequestWithToken = async (endpoint, data, headers = {}) => {
    const token = Cookies.get('token') || null;
    if (!token) {
        alert('Please login to access this page');
        window.location.href = `/login`;
        throw new Error('No token found');
    }

    const config = {
        headers: {
            'Authorization': token,
            ...headers
        }
    };

    // Don't set Content-Type for FormData
    if (!(data instanceof FormData)) {
        config.headers['Content-Type'] = 'application/json';
    }

    try {
        const response = await commonrequest("POST", `${BACKEND_URL}/${endpoint}`, data, config.headers);
        return response;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export const getRequest = async (endpoint, params = {}) => {
    try {
        const response = await commonrequest("GET", `${BACKEND_URL}/${endpoint}`, {}, {}, params);
        return response;
    } catch (error) {
        throw new Error(`Error in GET request to ${endpoint}`);
    }
}

export const getRequestWithToken = async (endpoint, params = {}) => {
    const token = Cookies.get('token') || null;
    if (!token) {
        alert('Please login to access this page');
        window.location.href = `/login`;
        // throw new Error('No token found');
    }
    const headers = {};
    headers['Authorization '] = token;
    headers['Content-Type'] = 'application/json';

    try {
        const response = await commonrequest("GET", `${BACKEND_URL}/${endpoint}`, {}, headers, params);
        return response;
    } catch (error) {
        throw new Error(`Error in GET request to ${endpoint}`);
    }
};
