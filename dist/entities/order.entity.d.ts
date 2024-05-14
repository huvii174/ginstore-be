import Product from "./product.entity";
import Transaction from "./transaction.entity";
declare class Order {
    id: number;
    od_transaction_id: number;
    od_product_id: number;
    od_discount_type: string;
    od_discount_value: number;
    od_qty: number;
    od_price: number;
    od_total_price: number;
    created_at: Date;
    updated_at: Date;
    products: Product[];
    transaction: Transaction;
}
export default Order;
