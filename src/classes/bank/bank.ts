import { IUser } from "../../interfaces/";
import { User } from "../";
import { v4 as uuid } from "uuid";

class Bank {
    ag: string;
    name: string;
    manager: {
        uid: string;
        name: string;
        password: string;
    };
    clients: Array<IUser>;
    constructor() {
        this.ag = '001';
        this.name = 'Zimmer Bank';
        this.manager = {
            uid: uuid(),
            name: 'Mateus Zimmer',
            password: '123456',
        };
        this.clients = [];
    }

    addClientToArray(client: User) {
        this.clients.push(client);
    }

    existCpf(cpf: string) {
        return this.clients.some((client) => client.cpf === cpf);
    }

    findClientById(id: string) {
        return this.clients.find((client) => client.uid === id);
    }

    modifiedClientBy(id: string, name: string, cpf: string, email: string, age: number) {
        const client = this.findClientById(id);
        if (!client) {
            return { status: 404, message: 'Not found' };
        }
        client.name = name;
        client.cpf = cpf;
        client.email = email;
        client.age = age;
        return { status: 200, message: 'OK', JSON: client };
    }
}

export const ZimmerBank = new Bank();