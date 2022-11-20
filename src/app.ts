import express from 'express';
import { parkRouter } from './Routes/Ride.Parks';

const app = express();
app.use(express.json());

app.use(`/park`,parkRouter);


app.listen(5000);