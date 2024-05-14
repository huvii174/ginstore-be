declare class UpdateOrderDto {
    od_transaction_id: number | 0;
    od_product_id: number | 0;
    od_discount_type: string | 'percent';
    od_discount_value: number | 0;
    od_qty: number | 0;
    od_price: number | 0;
    od_total_price: number | 0;
}
export default UpdateOrderDto;
