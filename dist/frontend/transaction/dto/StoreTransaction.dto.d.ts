declare class StoreTransactionDto {
    t_note: string;
    t_name: string;
    t_phone: string;
    t_total_money: number | 0;
    t_user_id: number | 0;
    t_type: number | 1;
    t_total_discount: number | 0;
    created_at?: Date;
    updated_at?: Date;
}
export default StoreTransactionDto;
