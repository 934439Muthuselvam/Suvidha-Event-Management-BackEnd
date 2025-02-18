import mongoose from "mongoose";

export const db = mongoose
  .createConnection(
    "mongodb+srv://muthuselvam73bitf:1234@cluster0.0jr7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .on("error", (err) => {
    console.error("MongoDB Connection Error:", err);
  })
  .once("open", () => {
    console.log("Master Data Dictionary Database Connected successfully");
  });
