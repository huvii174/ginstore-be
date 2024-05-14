import Vote from "./vote.entity";
declare class User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    avatar: number;
    refresh_token: string;
    created_at: Date;
    updated_at: Date;
    votes: Vote[];
}
export default User;
