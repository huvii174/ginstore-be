import { Request } from "express";
import { ResponseData } from "../../common/response/ResponseData";
import { CategoryService } from "./category.service";
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getListsCategory(req: Request): Promise<ResponseData>;
    show(id: number): Promise<ResponseData>;
    showSlug(slug: string): Promise<ResponseData>;
}
