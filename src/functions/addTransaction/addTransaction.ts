import { Request, Response } from 'express';
import { ZimmerBank, Transaction } from '../../classes/';

export function addTransaction(req: Request, res: Response) {
    const { userId } = req.params;
    const { title, value, type } = req.body;

    if (!title || !value || !type) {
        return res.status(400).send({ message: 'Missing informations' });
    }
    const client = ZimmerBank.findClientById(userId)!;
    const newTransaction = new Transaction(title, value, type);

    client.transactions.push(newTransaction);

    return res.status(200).send({ message: 'success', newTransaction, client });
}
