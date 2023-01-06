import { Request, Response } from 'express';
import { ZimmerBank } from '../../classes/';


export function removeTransactions(req: Request, res: Response) {
    const { userid, id } = req.params;
    const client = ZimmerBank.findClientById(userid);

    if (!client) {
        return res.status(404).send({ message: 'Not found!' });
    }

    const transaction = client.transactions.findIndex((t) => t.id === id);

    if (transaction < 0) {
        return res.status(404).send({ message: 'his transaction does not exist!' });
    }

    client.transactions.splice(transaction, 1);
    return res.status(200).send({ message: ' Transaction successfully deleted' });
}
