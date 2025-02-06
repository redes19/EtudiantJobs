import {role} from '../domain/user.domain';

export interface user {
    id: number;
    nom :string;
    prenom: string;
    email: string;
    paswword: string;
    role: role;
}