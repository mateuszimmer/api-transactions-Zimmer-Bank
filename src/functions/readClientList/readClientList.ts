import { Response } from 'express';
import { ZimmerBank } from '../../classes';


export function readClientList(res: Response) {
    const list = ZimmerBank.clients.map((client) => {
        return {
            id: client.uid,
            name: client.name,
            cpf: client.cpf,
            email: client.email,
            age: client.age,
        };
    });
    res.status(200).json(list);
}
