import { LogApiService } from "./log-api.service";
import { ResponseData } from "../../common/response/ResponseData";
export declare class LogApiController {
    private logApiService;
    constructor(logApiService: LogApiService);
    store(formData: any): Promise<ResponseData>;
}
