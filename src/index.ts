import express from 'express';
import cors from 'cors';
import { router } from './routes';
import { checkRequest } from './middlewares/';

const api = express();

const port = process.env.PORT || 8081;

api.use(express.json(), cors(), checkRequest, router);

api.listen(port, () => console.log('Servidor do Zimmer Bank está rodando...'));