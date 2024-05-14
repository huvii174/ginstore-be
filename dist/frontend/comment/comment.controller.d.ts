import { ResponseData } from "../../common/response/ResponseData";
import { CommentService } from "./comment.service";
import CreateCommentDto from "./dto/CreateComment.dto";
import UpdateCommentDto from "./dto/UpdateComment.dto";
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    getListsComments(req: any): Promise<ResponseData>;
    store(commentDto: CreateCommentDto): Promise<ResponseData>;
    show(id: number): Promise<ResponseData>;
    update(commentDto: UpdateCommentDto, id: number): Promise<ResponseData>;
}
