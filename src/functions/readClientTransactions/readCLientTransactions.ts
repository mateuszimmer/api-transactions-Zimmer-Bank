import { Request, Response } from 'express';
import { OdeteBank } from '../../classes/bank/bank';


export function readCLientTransactions(req: Request, res: Response) {
    const { userId } = req.params;
    const client = OdeteBank.findClientById(userId);

    if (!client) {
        return res.status(404).send({ message: 'not found' });
    }

    if (!client.transactions) {
        return res.status(404).send({ message: 'not transactions ' });
    }

    const incomeValue = client.transactions
        .map((incon) => (incon.type === 'income' ? incon.value : 0))
        .reduce((acc, next) => acc + next);
    const outcomeValue = client.transactions
        .map((outcon) => (outcon.type === 'outcome' ? outcon.value : 0))
        .reduce((acc, next) => acc + next);

    const result = incomeValue - outcomeValue;

    return res
        .status(200)
        .send({
            nameClient: client.name,
            transaction: client.transactions,
            balance: { income: incomeValue, outcome: outcomeValue, total: result },
        });
}
