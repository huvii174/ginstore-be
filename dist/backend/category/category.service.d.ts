import CategoryEntity from "../../entities/category.entity";
import CreateCategoryDto from "./dto/CreateCategory.dto";
import UpdateCategoryDto from "./dto/UpdateCategory.dto";
export declare class CategoryService {
    private categoryRepository;
    getListsCategory(paging: any, filters: any): Promise<[CategoryEntity[], number]>;
    store(categoryDto: CreateCategoryDto): Promise<CategoryEntity>;
    show(id: number): Promise<CategoryEntity>;
    update(id: number, categoryDto: UpdateCategoryDto): Promise<CategoryEntity>;
}
