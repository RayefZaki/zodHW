"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Ride_Parks_1 = require("./Routes/Ride.Parks");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(`/park`, Ride_Parks_1.parkRouter);
app.listen(5000);
