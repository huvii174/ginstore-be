import MenuEntity from "../../entities/menu.entity";
import CreateMenuDto from "./dto/CreateMenu.dto";
import UpdateMenuDto from "./dto/UpdateMenu.dto";
export declare class MenuService {
    private menuRepository;
    getListsMenus(paging: any, filters: any): Promise<[MenuEntity[], number]>;
    store(menuDto: CreateMenuDto): Promise<MenuEntity>;
    show(id: number): Promise<MenuEntity>;
    update(id: number, menuDto: UpdateMenuDto): Promise<MenuEntity>;
}
