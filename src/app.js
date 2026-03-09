import express from 'express';
import customerRoutes from './routes/customer.routes.js';
import restaurantRoutes from './routes/restaurant.routes.js';
import reservationRoutes from './routes/reservation.routes.js';
import tableRoutes from './routes/table.routes.js';

const app = express();

app.use(express.json());

app.use('/customers', customerRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/reservations', reservationRoutes);
app.use('/tables', tableRoutes);

export default app;