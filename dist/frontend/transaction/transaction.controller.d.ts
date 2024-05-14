import CreateTransactionDto from "./dto/CreateTransaction.dto";
import { TransactionService } from "./transaction.service";
import { ResponseData } from "../../common/response/ResponseData";
import { Request } from "express";
import UpdateTransactionDto from "./dto/UpdateTransaction.dto";
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    getListsTransaction(req: Request): Promise<ResponseData>;
    create(formData: CreateTransactionDto, req: Request, ip: string): Promise<ResponseData>;
    getLinkTTOnline(formData: any, req: Request, ip: string): Promise<any>;
    update(formData: UpdateTransactionDto, req: Request, id: number): Promise<ResponseData>;
    delete(req: Request, id: number): Promise<ResponseData>;
    show(id: number): Promise<ResponseData>;
    getConfig(): Promise<ResponseData>;
}
