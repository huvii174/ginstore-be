import Category from "./category.entity";
import Order from "./order.entity";
import Vote from "./vote.entity";
declare class Product {
    id: number;
    pro_name: string;
    pro_slug: string;
    pro_avatar: string;
    pro_description: string;
    pro_content: string;
    pro_price: number;
    pro_category_id: number;
    pro_discount_type: string;
    pro_discount_value: number | 0;
    pro_number: number;
    pro_active: number;
    pro_sale: number;
    pro_review_total: number;
    pro_review_star: number;
    created_at: Date;
    updated_at: Date;
    category: Category;
    order: Order;
    votes: Vote[];
}
export default Product;
