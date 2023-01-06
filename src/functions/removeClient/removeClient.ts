import { Request, Response } from 'express';
import { ZimmerBank } from '../../classes/';

export function removeClient(req: Request, res: Response) {
    const { id } = req.params;
    const index = ZimmerBank.clients.findIndex((client) => client.uid === id);
    if (index < 0) {
        res.status(404).send({ message: 'Not Found' });
    }
    ZimmerBank.clients.splice(index, 1);
    return res.send({ message: 'Cliente deletado com sucesso' });
}
