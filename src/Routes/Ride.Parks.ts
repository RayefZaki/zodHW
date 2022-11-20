import expres from "express";
import validate from "../middleWare/Validate";
import { parkSchema, parkType } from "../zod-schema/parkSchema";

export const parkRouter = expres();

let rides: parkType[] = [];
rides.push({
  id: "001",
  name: "Rayef",
  type: "rollercoster",
  tickets: 3,
  price: 125,
});

parkRouter.get(`/`, (req, res) => {
  return res.json(rides);
});

parkRouter.post(`/`, validate(parkSchema), (req, res) => {
  const newRide = req.body as parkType;
  rides.push(newRide);

  return res.json({
    message: "item added !",
  });
});

parkRouter.put(`/:id`, validate(parkSchema), (req, res) => {
  const { id } = req.params;
  const updateObj = req.body as parkType;
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

parkRouter.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  const newRideArr = rides.filter((del) => {
    return del.id !== id ;
  });

  rides = newRideArr;

  return res.json({
    message: "item deleted !",
  });
});