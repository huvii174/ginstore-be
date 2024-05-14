import OrderEntity from "../../entities/order.entity";
import CreateOrderDto from "./dto/CreateOrder.dto";
import UpdateOrderDto from "./dto/UpdateOrder.dto";
export declare class OrderService {
    private orderRepository;
    store(orderDto: CreateOrderDto): Promise<OrderEntity>;
    show(id: number): Promise<OrderEntity>;
    findOrderByTransactionId(id: number, transaction_id: number): Promise<OrderEntity>;
    update(id: number, orderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
}
