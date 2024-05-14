import ArticleEntity from "../../entities/article.entity";
import CreateArticleDto from "./dto/CreateArticle.dto";
import UpdateArticleDto from "./dto/UpdateArticle.dto";
export declare class ArticleService {
    private articleRepository;
    getListsArticles(paging: any, filters: any): Promise<[ArticleEntity[], number]>;
    store(articleDto: CreateArticleDto): Promise<ArticleEntity>;
    show(id: number): Promise<ArticleEntity>;
    update(id: number, articleDto: UpdateArticleDto): Promise<ArticleEntity>;
}
