import { Request, Response } from 'express';
import { ZimmerBank } from '../../classes';

export function thisClient(req: Request, res: Response) {
    const { id } = req.params;
    const client = ZimmerBank.findClientById(id);

    if (!client) {
        return res.status(404).send({ message: `Client ID ${id} not found` });
    }
    return res
        .status(200)
        .send({
            id: client.uid,
            name: client.name,
            cpf: client.cpf,
            email: client.email,
            age: client.age,
        });
}
