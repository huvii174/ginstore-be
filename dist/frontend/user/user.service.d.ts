import UserEntity from "../../entities/user.entity";
import RegisterDto from "../../auth/dto/Register.dto";
import UpdatePhoneUserDto from "./dto/UpdatePhoneUser.dto";
import UpdateEmailUserDto from "./dto/UpdateEmailUser.dto";
import UpdatePasswordUserDto from "./dto/UpdatePasswordUser.dto";
export declare class UserService {
    private userRepository;
    findOneByUsername(username: string): Promise<UserEntity>;
    register(userRegister: RegisterDto): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    updateInfo(id: number, updateUser: any): Promise<UserEntity>;
    updatePhone(id: number, updatePhone: UpdatePhoneUserDto): Promise<UserEntity>;
    updateEmail(id: number, updateEmail: UpdateEmailUserDto): Promise<UserEntity>;
    updatePassword(id: number, updatePassword: UpdatePasswordUserDto): Promise<UserEntity>;
    updateRefreshToken(user_id: number, refresh_token: string): Promise<void>;
    findOneByEmail(email: string): Promise<UserEntity>;
    findOneByPhone(phone: string): Promise<UserEntity>;
}
