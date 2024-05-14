import Order from "./order.entity";
declare class Transaction {
    id: number;
    t_note: string;
    t_name: string;
    t_phone: string;
    t_user_id: number;
    t_total_money: number;
    t_total_discount: number;
    t_status: number;
    created_at: Date;
    orders: Order[];
}
export default Transaction;
