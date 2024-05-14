import { UserService } from "./user.service";
import { ResponseData } from "../../common/response/ResponseData";
import UpdateInfoUserDto from "./dto/UpdateInfoUser.dto";
import UpdatePhoneUserDto from "./dto/UpdatePhoneUser.dto";
import UpdateEmailUserDto from "./dto/UpdateEmailUser.dto";
import UpdatePasswordUserDto from "./dto/UpdatePasswordUser.dto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    updateInfo(req: any, userUpdate: UpdateInfoUserDto): Promise<ResponseData>;
    updateEmail(req: any, formData: UpdateEmailUserDto): Promise<ResponseData>;
    updatePassword(req: any, formData: UpdatePasswordUserDto): Promise<ResponseData>;
    updatePhone(req: any, formData: UpdatePhoneUserDto): Promise<ResponseData>;
}
