import axios from 'axios';
import { IUser, ILoginUser } from "../Models/user.model";

const baseURL = import.meta.env.VITE_API_URL;

export const Register = async (user: IUser): Promise<void> => {
    console.log("register user", user);
    try {
        const res = await axios.post(`${baseURL}/user/register`, user);
        if (!res) {
            throw new Error("Error register frontend");
        }
    } catch (error) {
        throw new Error(`Error register: ${error}`);
    }
}

export const Login = async (user: ILoginUser): Promise<IUser> => {
    console.log('login user', user);
    try {
        const res = await axios.post(`${baseURL}/user/login`, user);
        if (!res || !res.data) {
            throw new Error("Error login frontend");
        }

        return res.data;
    } catch (error) {
        throw new Error(`Error login: ${error}`);
    }
}