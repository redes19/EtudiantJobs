import bcrypt from "bcrypt";
import db from "../../model/db.model";
import { Pool, ResultSetHeader } from "mysql2/promise";
import { IUser } from "../../model/user.model";

export class UserService {
    private db: Pool;

    constructor() {
        this.db = db;
    }

    public RegisterUser = async (nom: string, prenom: string, password: string, email: string, role: string): Promise<void> => {
        const connexion = await this.db.getConnection();
        try {
            await connexion.beginTransaction();

            const hashedPassword = await bcrypt.hash(password, 15);

            const query = 'INSERT INTO user (nom, prenom, email, password, role) VALUES (?,?,?,?,?)';
            const [rows] = await connexion.execute<ResultSetHeader>(query, [nom, prenom, email, hashedPassword, role]);

            const idUser = rows.insertId;

            if (role = "chercher") {
                const query = "INSERT INTO chercher (id_user) VALUES (?)";
                await connexion.execute(query, [idUser]);
            } else {
                console.log("role not found");
                throw new Error("Role not found");
            }

            await connexion.commit();

        } catch (error) {
            console.log("Error in register", error);
            throw error;
        }
    }

    public LoginUser = async (email: string, password: string): Promise<IUser> => {
        const db = this.db;
        try {
            const query = "SELECT * FROM user WHERE email = ?";
            const [rows] = await db.execute<any[]>(query, [email]);

            if (rows.length === 0) {
                throw new Error("User not found");
            }

            const user = rows[0];

            const passwordValid = await bcrypt.compare(password, user.password);
            if (!passwordValid) {
                throw new Error("Password not valid");
            }

            return user as IUser;
        } catch (error) {
            console.log("Error in login", error);
            throw error;
        }
    }

}