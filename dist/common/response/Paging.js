"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paging = void 0;
class Paging {
    constructor(page, page_size, total) {
        this.page = page;
        this.page_size = page_size;
        this.total = total;
        this.total_page = Math.ceil(total % page_size === 0 ? total / page_size + 1 : total / page_size);
    }
}
exports.Paging = Paging;
//# sourceMappingURL=Paging.js.map