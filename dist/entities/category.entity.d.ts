import Product from "./product.entity";
declare class Category {
    id: number;
    c_name: string;
    c_slug: string;
    c_avatar: string;
    c_banner: string;
    c_description: string;
    c_hot: number;
    c_status: number;
    products: Product[];
    created_at: Date;
    updated_at: Date;
}
export default Category;
