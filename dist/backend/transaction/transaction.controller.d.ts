import { Request } from "express";
import { ResponseData } from "../../common/response/ResponseData";
import { TransactionService } from "./transaction.service";
export declare class TransactionController {
    private transactionService;
    constructor(transactionService: TransactionService);
    getListsTransaction(req: Request): Promise<ResponseData>;
}
