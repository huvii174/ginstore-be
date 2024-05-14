import { AuthService } from "./auth.service";
import { ResponseData } from "../common/response/ResponseData";
import RegisterDto from "./dto/Register.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registrationData: RegisterDto): Promise<ResponseData>;
    login(req: any): Promise<ResponseData>;
    refreshTokens(req: any): Promise<ResponseData>;
    getProfile(req: any): Promise<ResponseData>;
}
