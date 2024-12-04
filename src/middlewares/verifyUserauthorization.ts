import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";


function verifyUserAuthorization(role: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            throw new AppError("User is not active", 401);
        }

        if ( !role.includes(req.user.role)) {
            throw new AppError("Insufficient permission", 403);
        }


        return next();
    }
}

export { verifyUserAuthorization }; 