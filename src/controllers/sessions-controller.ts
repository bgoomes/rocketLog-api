import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";
import { AppError } from "@/utils/AppError";
import { compare } from "bcrypt";
import { authConfig } from "@/configs/auth"
import { sign } from "jsonwebtoken";



class SessionsController {
    async create(request: Request, response: Response) {
        const bodySchema = z.object({
            email: z.string().email(),
            password: z.string().min(6),
        });
        const { email, password } = bodySchema.parse(request.body);
        const user = await prisma.user.findFirst({
            where: { email }
        })

        if (!user) {
            throw new AppError('E-mail e/ou senha incorreta', 401);
        }

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched) {
            throw new AppError('E-mail e/ou senha incorreta', 401);
        }
        const { secret, expiresIn } = authConfig.jwt
        const token = sign({ role: user.role ?? "customer" }, secret, {
            subject: user.id,
            expiresIn
        })

        const { password: hashedPassord, ...userWithoutPassword } = user; 

        return response.json({ token, user: userWithoutPassword });
    }
}

export { SessionsController };