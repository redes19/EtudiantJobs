import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.services';

export class UserController {
    private UserService: UserService;

    constructor() {
        this.UserService = new UserService();
    }

    public Register = async (req: Request, res: Response, next: NextFunction): Promise<void> =>  {
        try {
            const { nom, prenom, email, password, role } = req.body;
            await this.UserService.RegisterUser(nom, prenom, email, password, role);
            res.status(200).send("User registered");
        } catch (err: any) {
            next(err);
        }
    }

    public Login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { email, password } = req.body;
            await this.UserService.LoginUser(email, password);
            res.status(200).send("User logged in");
        } catch (err: any) {
            next(err);
        }
    }
}