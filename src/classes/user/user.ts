import { v4 as uuid } from "uuid";
import { ITransaction, IUser } from "../../interfaces/";

export class User implements IUser {
    uid: string;
    transactions: Array<ITransaction>;

    constructor(
        public name: string,
        public cpf: string,
        public email: string,
        public age: number,
    ) {
        this.uid = uuid();
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.age = age;
        this.transactions = []
    }

}