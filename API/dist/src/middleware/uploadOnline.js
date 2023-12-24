"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = __importDefault(require("cloudinary"));
cloudinary_1.default.v2.config({
    cloud_name: 'ddwk2dfyz',
    api_key: '833823654815724',
    api_secret: 'dJ1mg27i0vUIq9BcuvCLDjLWnRY',
    secure: true,
});
class UploadOnline {
    url(req) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.file) {
                return;
            }
            const filebase64 = req.file.buffer.toString('base64');
            const file = `data:${req.file.mimetype};base64,${filebase64}`;
            const result = yield cloudinary_1.default.v2.uploader.upload(file);
            const image = result.url;
            return image;
        });
    }
}
exports.default = UploadOnline;
