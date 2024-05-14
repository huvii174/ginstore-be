import { Request } from "express";
import { ResponseData } from "../../common/response/ResponseData";
import { ProductService } from "./product.service";
import CreateProductDto from "./dto/CreateProduct.dto";
import UpdateProductDto from "./dto/UpdateProduct.dto";
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getListsProducts(request: Request): Promise<ResponseData>;
    store(productDto: CreateProductDto): Promise<ResponseData>;
    show(id: number): Promise<ResponseData>;
    update(productDto: UpdateProductDto, id: number): Promise<ResponseData>;
}
