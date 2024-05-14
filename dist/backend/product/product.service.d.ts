import ProductEntity from "../../entities/product.entity";
import CreateProductDto from "./dto/CreateProduct.dto";
import UpdateProductDto from "./dto/UpdateProduct.dto";
export declare class ProductService {
    private productRepository;
    getListsProducts(paging: any, filters: any): Promise<[ProductEntity[], number]>;
    store(productDto: CreateProductDto): Promise<ProductEntity>;
    show(id: number): Promise<ProductEntity>;
    update(id: number, productDto: UpdateProductDto): Promise<ProductEntity>;
}
