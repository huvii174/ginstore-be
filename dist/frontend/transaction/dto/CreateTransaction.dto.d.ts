declare class CreateTransactionDto {
    note: string;
    name: string;
    phone: string;
    t_type: number | 1;
    total_price: number | 0;
    products: object;
}
export default CreateTransactionDto;
