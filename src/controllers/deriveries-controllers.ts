import  { Request, Response } from "express";

class DeriveriesController {
    async create(request: Request, response: Response) {
       return response.json({ message: "ok" });
    }
}

export { DeriveriesController };