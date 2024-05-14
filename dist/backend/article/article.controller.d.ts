import { Request } from "express";
import { ResponseData } from "../../common/response/ResponseData";
import { ArticleService } from "./article.service";
import CreateArticleDto from "./dto/CreateArticle.dto";
import UpdateArticleDto from "./dto/UpdateArticle.dto";
export declare class ArticleController {
    private articleService;
    constructor(articleService: ArticleService);
    getListsArticles(request: Request): Promise<ResponseData>;
    store(articleDto: CreateArticleDto): Promise<ResponseData>;
    show(id: number): Promise<ResponseData>;
    update(articleDto: UpdateArticleDto, id: number): Promise<ResponseData>;
}
