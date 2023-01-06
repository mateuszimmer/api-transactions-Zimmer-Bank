import { Request, Response, NextFunction } from 'express';
import { ZimmerBank } from '../classes/bank/bank';

const checkCpfToEquals = (req: Request, res: Response, next: NextFunction) => {
    const { cpf } = req.body;
    const cpfExist = ZimmerBank.existCpf(cpf);
    if (cpfExist) {
        return res
            .status(403)
            .send({ error: 403, message: 'CPF existente. Cadastro não efetuado!' });
    }

    next();
};

export default checkCpfToEquals;
