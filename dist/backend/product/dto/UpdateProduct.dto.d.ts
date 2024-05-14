declare class UpdateProductDto {
    pro_name: string;
    pro_slug: string;
    pro_avatar: string;
    pro_description: string;
    pro_price: number | 0;
    pro_category_id: number | 0;
    pro_number: number | 0;
    pro_discount_type: string;
    pro_discount_value: number | 0;
    pro_active: number | 0;
    pro_content: string;
    pro_hot: number | 0;
}
export default UpdateProductDto;
