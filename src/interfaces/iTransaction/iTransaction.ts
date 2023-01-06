export interface ITransaction {
    id: string;
    title: string;
    value: number;
    type: 'income' | 'outcome';
}
