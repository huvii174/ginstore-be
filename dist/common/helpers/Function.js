"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSlug = void 0;
function toSlug(str, character) {
    character = character ? character : '-';
    let strSlug = str.toLowerCase();
    strSlug = strSlug
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    strSlug = strSlug.replace(/[đĐ]/g, 'd');
    strSlug = strSlug.replace(/([^0-9a-z-\s])/g, '');
    strSlug = strSlug.replace(/(\s+)/g, character);
    strSlug = strSlug.replace(/-+/g, character);
    strSlug = strSlug.replace(/^-+|-+$/g, '');
    strSlug = strSlug.replace(/^_+|_+$/g, '');
    return strSlug;
}
exports.toSlug = toSlug;
//# sourceMappingURL=Function.js.map