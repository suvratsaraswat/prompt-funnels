import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB(); // Connect to MongoDB
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
