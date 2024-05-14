import CreateTransactionDto from "./dto/CreateTransaction.dto";
import TransactionEntity from "../../entities/transaction.entity";
import { ProductService } from "../product/product.service";
import StoreTransactionDto from "./dto/StoreTransaction.dto";
import { OrderService } from "../order/order.service";
import UpdateTransactionDto from "./dto/UpdateTransaction.dto";
import { ServiceCore } from "../../curl/serviceCore";
export declare class TransactionService {
    private productService;
    private orderService;
    private readonly serviceCore;
    private transactionRepository;
    private logger;
    constructor(productService: ProductService, orderService: OrderService, serviceCore: ServiceCore);
    getListsTransaction(paging: any, filters: any): Promise<[TransactionEntity[], number]>;
    create(transactionDto: CreateTransactionDto, userID: number, ip: any): Promise<any[]>;
    getLinkPaymentVnpay(transaction: any): Promise<any>;
    storeVnPay(transaction: any): Promise<string>;
    storeTransaction(transactionDto: StoreTransactionDto): Promise<TransactionEntity>;
    update(transactionDto: UpdateTransactionDto, userID: number, id: number): Promise<TransactionEntity>;
    findById(id: number): Promise<TransactionEntity>;
    deleteTransaction(user_id: number, id: number): Promise<void>;
    show(id: number): Promise<TransactionEntity>;
}
