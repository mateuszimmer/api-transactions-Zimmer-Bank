import { v4 as uuid } from "uuid";
import { ITransaction } from "../../interfaces/";

export class Transaction implements ITransaction {
    id: string;

    constructor(
        public title: string,
        public value: number,
        public type: "income" | "outcome",
    ) {
        this.id = uuid();
        this.title = title;
        this.type = type;
    }

}