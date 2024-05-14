import Vote from "./vote.entity";
declare class Comment {
    id: number;
    c_name: string;
    c_content: string;
    c_product_id: number;
    c_user_id: number;
    created_at: Date;
    updated_at: Date;
    vote: Vote;
}
export default Comment;
