import { Request, Response } from "express";
import { ZimmerBank, User } from "../../classes/";
import { IUser } from "../../interfaces/";

export function addUser(req: Request, res: Response) {
    const { name, cpf, email, age } = req.body

    if (!name || !cpf || !email || !age) {
        return res.status(402).send({ message: 'Missing: name, cpf, email and age' })
    }

    const client: IUser = new User(name, cpf, email, age);

    ZimmerBank.addClientToArray(client);

    return res
        .status(200)
        .send({ message: 'Success!', client, ZimmerBankClients: ZimmerBank.clients });
}