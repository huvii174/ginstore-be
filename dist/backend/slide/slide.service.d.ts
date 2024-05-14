import SlideEntity from "../../entities/slide.entity";
import CreateSlideDto from "./dto/CreateSlide.dto";
import UpdateSlideDto from "./dto/UpdateSlide.dto";
export declare class SlideService {
    private slideRepository;
    getLists(paging: any, filters: any): Promise<[SlideEntity[], number]>;
    store(createSlideDto: CreateSlideDto): Promise<SlideEntity>;
    show(id: number): Promise<SlideEntity>;
    update(id: number, updateSlideDto: UpdateSlideDto): Promise<SlideEntity>;
}
