import { ITransaction } from "../iTransaction/iTransaction";

export interface IUser {
    uid: string;
    name: string;
    cpf: string;
    email: string;
    age: number;
    transactions: Array<ITransaction>;
}

