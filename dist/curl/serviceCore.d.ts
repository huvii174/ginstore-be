import { HttpService } from "@nestjs/axios";
export declare class ServiceCore {
    private readonly http;
    private headers;
    constructor(http: HttpService);
    getLinkPaymentVnpay(data: any): Promise<any>;
}
