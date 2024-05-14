"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontendModule = void 0;
const common_1 = require("@nestjs/common");
const product_module_1 = require("./product/product.module");
const category_module_1 = require("./category/category.module");
const user_module_1 = require("./user/user.module");
const transaction_module_1 = require("./transaction/transaction.module");
const order_module_1 = require("./order/order.module");
const article_module_1 = require("./article/article.module");
const menu_module_1 = require("./menu/menu.module");
const vote_module_1 = require("./vote/vote.module");
const comment_module_1 = require("./comment/comment.module");
const log_api_module_1 = require("./log-api/log-api.module");
let FrontendModule = class FrontendModule {
};
FrontendModule = __decorate([
    (0, common_1.Module)({
        imports: [product_module_1.ProductModule, category_module_1.CategoryModule, user_module_1.UserModule, transaction_module_1.TransactionModule, order_module_1.OrderModule, article_module_1.ArticleModule, menu_module_1.MenuModule, vote_module_1.VoteModule, comment_module_1.CommentModule, log_api_module_1.LogApiModule]
    })
], FrontendModule);
exports.FrontendModule = FrontendModule;
//# sourceMappingURL=frontend.module.js.map