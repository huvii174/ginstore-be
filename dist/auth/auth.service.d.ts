import { UserService } from "../frontend/user/user.service";
import { JwtService } from "@nestjs/jwt";
import RegisterDto from "./dto/Register.dto";
import { ConfigService } from "@nestjs/config";
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    create(userDto: RegisterDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    showUser(id: number): Promise<import("../entities/user.entity").default>;
    refreshTokens(refreshToken: string): Promise<any>;
    getTokens(userId: number, username: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
