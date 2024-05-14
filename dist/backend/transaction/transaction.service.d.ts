import TransactionEntity from "../../entities/transaction.entity";
import { ProductService } from "../../frontend/product/product.service";
import { OrderService } from "../../frontend/order/order.service";
export declare class TransactionService {
    private productService;
    private orderService;
    private transactionRepository;
    private logger;
    constructor(productService: ProductService, orderService: OrderService);
    getListsTransaction(paging: any, filters: any): Promise<[TransactionEntity[], number]>;
}
