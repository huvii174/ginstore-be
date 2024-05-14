import { Request } from "express";
import { ResponseData } from "../../common/response/ResponseData";
import { SlideService } from "./slide.service";
import CreateSlideDto from "./dto/CreateSlide.dto";
import UpdateSlideDto from "./dto/UpdateSlide.dto";
export declare class SlideController {
    private slideService;
    constructor(slideService: SlideService);
    getLists(request: Request): Promise<ResponseData>;
    store(slideDto: CreateSlideDto): Promise<ResponseData>;
    show(id: number): Promise<ResponseData>;
    update(slideDto: UpdateSlideDto, id: number): Promise<ResponseData>;
}
