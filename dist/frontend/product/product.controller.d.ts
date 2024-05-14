import { ProductService } from "./product.service";
import { Request } from "express";
import { ResponseData } from "../../common/response/ResponseData";
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    getListsProducts(req: Request): Promise<ResponseData>;
    show(id: number): Promise<ResponseData>;
    showSlug(slug: string): Promise<ResponseData>;
}
