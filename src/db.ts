import mongoose from "mongoose";

// Connection URL
const url = process.env.MONGO_DB_URL ?? "mongodb:localhost:27017/test";

// Connect to MongoDB
mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected..."))
  .catch((err: any) => console.log("ERROR while COnnecting ,", err));

export default mongoose;
