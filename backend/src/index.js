// IMPORTS
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import "dotenv/config.js";

// CONSTANTS
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// MIDDLEWARES
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

// ROUTES
app.use("/api/health", (req, res) => {
	res.status(200).json({ message: "API is healthy" });
});
app.use("/api/auth", authRoutes);

// SERVE FRONTEND IN PRODUCTION
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// START SERVER
app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});
