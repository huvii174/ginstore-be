import VoteEntity from "../../entities/vote.entity";
import CreateVoteDto from "./dto/CreateVote.dto";
import UpdateVoteDto from "./dto/UpdateVote.dto";
import { ProductService } from "../product/product.service";
export declare class VoteService {
    private productService;
    private voteRepository;
    constructor(productService: ProductService);
    getListsVote(filters: any): Promise<[VoteEntity[], number]>;
    store(voteDto: CreateVoteDto): Promise<VoteEntity>;
    show(id: number): Promise<VoteEntity>;
    update(id: number, voteDto: UpdateVoteDto): Promise<VoteEntity>;
    delete(id: number, user_id: number): Promise<void>;
}
