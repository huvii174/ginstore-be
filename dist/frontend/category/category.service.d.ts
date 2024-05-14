import CategoryEntity from "../../entities/category.entity";
export declare class CategoryService {
    private categoryRepository;
    getListsCategory(paging: any, filters: any): Promise<[CategoryEntity[], number]>;
    show(id: number): Promise<CategoryEntity>;
    showSlug(slug: string): Promise<CategoryEntity>;
}
