import { Request } from "express";
import { ResponseData } from "../../common/response/ResponseData";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getListsUser(request: Request): Promise<ResponseData>;
}
