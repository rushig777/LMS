"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.book_id_validator = void 0;
const joi_1 = __importDefault(require("joi"));
const errorClass_1 = require("../utils/errorClass");
const book_id_validator = (req, res, next) => {
    try {
        const schema = joi_1.default.object({
            book_id: joi_1.default.string().length(36).uuid(),
        });
        const result = schema.validate(req.params);
        if (result.error) {
            throw new errorClass_1.BAD_REQUEST(result.error.message);
        }
        next();
    }
    catch (error) {
        next(next(error));
    }
};
exports.book_id_validator = book_id_validator;
// export const member_id_validator = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const schema = Joi.object({
//       member_id: Joi.string().length(36).uuid(),
//     });
//     const result = schema.validate(req.params);
//     if (result.error) {
//       throw new BAD_REQUEST(result.error.message);
//     }
//     next();
//   } catch (error) {
//     next(next(error));
//   }
// };
