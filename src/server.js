import mongoose from 'mongoose';
import app from './app.js';

const startServer = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/dine-in');
    console.log('Connected to MongoDB');

    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });

  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
};

startServer();