import { Request, Response } from 'express';
import { ZimmerBank } from '../../classes/';


export function editClient(req: Request, res: Response) {
    const { name, cpf, email, age } = req.body;
    const { id } = req.params;

    if (!name || !cpf || !email || !age) {
        return res.status(418).send({ message: 'Missing information' });
    }
    const client = ZimmerBank.modifiedClientBy(id, name, cpf, email, Number(age));
    return res.status(client.status).send({ message: client.message, data: client.JSON });
}
