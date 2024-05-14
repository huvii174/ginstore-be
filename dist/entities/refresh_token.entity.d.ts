declare class RefreshToken {
    id: number;
    user_id: number;
    is_revoked: boolean;
    expires: Date;
    refresh_token: string;
    code: string;
}
export default RefreshToken;
