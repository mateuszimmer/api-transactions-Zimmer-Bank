import { Router, Request, Response } from 'express';
import {addTransaction, addUser, customerSpecificTransaction, editClient, editSpecificTransaction,
    readClientList, readCLientTransactions, removeClient, removeTransactions, thisClient
    } from '../functions';
import { checkCpfToEquals } from '../middlewares/';

export const router = Router();

// Rotas de usuário
router.post('/users', checkCpfToEquals, (req: Request, res: Response) => {
    addUser(req, res);
})

router.get('/clients', (req: Request, res: Response) => {
    readClientList(res);
});

router.get('/clients/:id', (req: Request, res: Response) => {
    thisClient(req, res);
});

router.put('/clients/:id', (req: Request, res: Response) => {
    editClient(req, res);
});

router.delete('/clients/:id', (req: Request, res: Response) => {
    removeClient(req, res);
});


// Rotas de transações
router.post('/clients/:userId/transactions', (req: Request, res: Response) => {
    addTransaction(req, res);
});

router.get('/clients/:userId/transactions', (req: Request, res: Response) => {
    readCLientTransactions(req, res);
});

router.get('/clients/:userId/transactions/:id', (req: Request, res: Response) => {
    customerSpecificTransaction(req, res);
});

router.put('/clients/:userId/transactions/:id', (req: Request, res: Response) => {
    editSpecificTransaction(req, res);
});

router.delete('/clients/:userId/transactions/:id', (req: Request, res: Response) => {
    removeTransactions(req, res);
});
