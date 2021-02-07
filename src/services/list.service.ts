import axios from "axios";
import { authHeader } from "./auth-header";
import { List } from '../interfaces';

const API_URL = `${process.env.REACT_APP_API_URL}/members-list/`;

export const getList = async () => {
    return await axios.get(API_URL, { headers: authHeader() })
};

export const createList = async (list: List) => {
    return await axios.post(API_URL,
        list,
        {
            headers: authHeader()
        });
};

export const editList = async (list: List) => {
    return await axios.patch(API_URL,
        list,
        {
            headers: authHeader()
        });
};
