import LogApi from "../../entities/log_api.entity";
export declare class LogApiService {
    private logApiRepository;
    store(formData: any): Promise<LogApi[]>;
}
