import { role } from '../Domain/user.model';

export interface IUser {
    id?: number;
    nom :string;
    prenom: string;
    email: string;
    password: string;
    role: role;
}

export interface ILoginUser {
    email: string,
    password: string
}