import CommentEntity from "../../entities/comment.entity";
import CreateCommentDto from "./dto/CreateComment.dto";
import UpdateCommentDto from "./dto/UpdateComment.dto";
export declare class CommentService {
    private commentRepository;
    getListsComments(user_id: number, filters: any): Promise<[CommentEntity[], number]>;
    store(commentDto: CreateCommentDto): Promise<CommentEntity>;
    show(id: number): Promise<CommentEntity>;
    update(id: number, commentDto: UpdateCommentDto): Promise<CommentEntity>;
}
