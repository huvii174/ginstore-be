declare class CreateVoteDto {
    v_content: string;
    v_number: number | 0;
    v_product_id: number | 0;
    v_user_id?: number | 0;
    v_status?: number | 1;
    created_at?: Date;
    updated_at?: Date;
}
export default CreateVoteDto;
