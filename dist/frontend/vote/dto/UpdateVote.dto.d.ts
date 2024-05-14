declare class UpdateVoteDto {
    v_content: string;
    v_number: number | 0;
    v_product_id: number | 0;
    v_user_id?: number | 0;
    v_status?: number | 1;
    updated_at?: Date;
}
export default UpdateVoteDto;
