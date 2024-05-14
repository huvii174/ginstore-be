import ProductEntity from "../../entities/product.entity";
export declare class ProductService {
    private productRepository;
    getListsProducts(paging: any, filters: any): Promise<[ProductEntity[], number]>;
    show(id: number): Promise<ProductEntity>;
    showSlug(slug: string): Promise<ProductEntity>;
    incrementProduction(id: number, vote: number): Promise<void>;
    decrementProduction(id: number, vote: number): Promise<void>;
}
