import User from "../entities/user.entity";
import RefreshToken from "../entities/refresh_token.entity";
export interface RefreshTokenPayload {
    jti: number;
    sub: number;
}
export declare class TokensService {
    private readonly jwt;
    private refreshTokenRepository;
    private userRepository;
    generateAccessToken(user: User): Promise<string>;
    generateRefreshToken(user: User, expiresIn: number): Promise<string>;
    createRefreshToken(user: User, expiresIn: number): Promise<RefreshToken>;
    resolveRefreshToken(encoded: string): Promise<{
        user: User;
        token: RefreshToken;
    }>;
    createAccessTokenFromRefreshToken(refresh: string): Promise<{
        token: string;
        user: User;
    }>;
    private decodeRefreshToken;
    private getUserFromRefreshTokenPayload;
    private getStoredTokenFromRefreshTokenPayload;
    findTokenById(tokenId: number): Promise<RefreshToken>;
}
