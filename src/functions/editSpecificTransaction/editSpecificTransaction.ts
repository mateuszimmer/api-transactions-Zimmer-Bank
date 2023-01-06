import { Request, Response } from 'express';
import { ZimmerBank } from '../../classes/';


export function editSpecificTransaction(req: Request, res: Response) {
    const { userid, id } = req.params;
    const client = ZimmerBank.findClientById(userid);
    const { title, value, type } = req.body;

    if (!title || !value || !type) {
        return res.status(418).send({
            message:
                'Missing information.',
        });
    }

    if (!client) {
        return res.status(404).send({ message: 'Not found!' });
    }

    const transaction = client.transactions.find((t) => t.id === id);

    if (!transaction) {
        return res.status(404).send({ message: "This transaction doesn't exist!" });
    }

    transaction.title = title;
    transaction.value = value;
    transaction.type = type;

    return res.status(200).send({
        message: 'success',
        client: client.name,
        transaction,
    });
}
