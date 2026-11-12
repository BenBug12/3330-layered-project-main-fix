import express from "express";
import tasksRouter from "./routes/tasks.routes.js";


const app = express();

app.use(express.json());

app.use("/api/tasks", tasksRouter);

const errorHandler = (err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || "Internal Server Error."
    });
};

export default app;