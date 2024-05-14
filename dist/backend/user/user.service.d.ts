import UserEntity from "../../entities/user.entity";
export declare class UserService {
    private userRepository;
    getListsUser(paging: any, filters: any): Promise<[UserEntity[], number]>;
}
