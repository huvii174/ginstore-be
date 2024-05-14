import { CategoryService } from "./category.service";
import CreateCategoryDto from "./dto/CreateCategory.dto";
import UpdateCategoryDto from "./dto/UpdateCategory.dto";
import { ResponseData } from "../../common/response/ResponseData";
import { Request } from 'express';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    getListsCategory(request: Request): Promise<ResponseData>;
    store(categoryDto: CreateCategoryDto): Promise<ResponseData>;
    show(id: number): Promise<ResponseData>;
    update(categoryDto: UpdateCategoryDto, id: number): Promise<ResponseData>;
}
