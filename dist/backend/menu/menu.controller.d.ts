import { Request } from "express";
import { ResponseData } from "../../common/response/ResponseData";
import { MenuService } from "./menu.service";
import CreateMenuDto from "./dto/CreateMenu.dto";
import UpdateMenuDto from "./dto/UpdateMenu.dto";
export declare class MenuController {
    private menuService;
    constructor(menuService: MenuService);
    getListsMenus(request: Request): Promise<ResponseData>;
    store(menuDto: CreateMenuDto): Promise<ResponseData>;
    show(id: number): Promise<ResponseData>;
    update(menuDto: UpdateMenuDto, id: number): Promise<ResponseData>;
}
