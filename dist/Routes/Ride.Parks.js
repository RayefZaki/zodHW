"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parkRouter = void 0;
const express_1 = __importDefault(require("express"));
const Validate_1 = __importDefault(require("../middleWare/Validate"));
const parkSchema_1 = require("../zod-schema/parkSchema");
exports.parkRouter = (0, express_1.default)();
let rides = [];
rides.push({
    id: "001",
    name: "Rayef",
    type: "rollercoster",
    tickets: 3,
    price: 125,
});
exports.parkRouter.get(`/`, (req, res) => {
    return res.json(rides);
});
exports.parkRouter.post(`/`, (0, Validate_1.default)(parkSchema_1.parkSchema), (req, res) => {
    const newRide = req.body;
    rides.push(newRide);
    return res.json({
        message: "item added !",
    });
});
exports.parkRouter.put(`/:id`, (0, Validate_1.default)(parkSchema_1.parkSchema), (req, res) => {
    const { id } = req.params;
    const updateObj = req.body;
    rides.map((upd) => {
        if (upd.id === id || upd.name === id) {
            upd.id = updateObj.id;
            upd.name = updateObj.name;
            upd.type = updateObj.type;
            upd.tickets = updateObj.tickets;
            upd.price = updateObj.price;
        }
    });
    return res.json({
        message: "item updated !",
    });
});
exports.parkRouter.delete(`/:id`, (req, res) => {
    const { id } = req.params;
    const newRideArr = rides.filter((del) => {
        return del.id !== id;
    });
    rides = newRideArr;
    return res.json({
        message: "item deleted !",
    });
});
