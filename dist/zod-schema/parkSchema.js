"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parkSchema = void 0;
const zod_1 = require("zod");
exports.parkSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: "Id is required !" })
            .min(2, "ID must be at least 2 numbers"),
        name: zod_1.z.string({ required_error: "Name is required!" })
            .min(2, "Name must be at least 2 characters"),
        type: zod_1.z.enum(["rollercoster", "thriller", "water"], {
            required_error: "Type is required and must be one of this array [`rollercoster`, `thriller`, `water`]",
        }),
        tickets: zod_1.z.number({ required_error: "Tickets is required!" }),
        price: zod_1.z.number({ required_error: "Price is required!" }),
    }),
});
