import Product from "./product.entity";
import User from "./user.entity";
import Comment from "./comment.entity";
declare class Vote {
    id: number;
    v_content: string;
    v_user_id: number;
    v_product_id: number;
    v_number: number;
    v_status: number;
    created_at: Date;
    updated_at: Date;
    product: Product;
    user: User;
    comments: Comment[];
}
export default Vote;
