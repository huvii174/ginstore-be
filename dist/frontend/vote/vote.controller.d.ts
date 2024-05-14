import { ResponseData } from "../../common/response/ResponseData";
import { VoteService } from "./vote.service";
import CreateVoteDto from "./dto/CreateVote.dto";
import UpdateVoteDto from "./dto/UpdateVote.dto";
export declare class VoteController {
    private voteService;
    constructor(voteService: VoteService);
    getListsVote(req: any): Promise<ResponseData>;
    store(voteDto: CreateVoteDto, req: any): Promise<ResponseData>;
    show(id: number): Promise<ResponseData>;
    update(voteDto: UpdateVoteDto, id: number, req: any): Promise<ResponseData>;
    delete(voteDto: UpdateVoteDto, id: number, req: any): Promise<ResponseData>;
}
