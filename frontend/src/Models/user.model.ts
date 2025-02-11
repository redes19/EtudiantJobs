import { role } from '../Domain/user.model';

export interface IUser {
    id: number;
    nom :string;
    prenom: string;
    email: string;
    paswword: string;
    role: role;
}