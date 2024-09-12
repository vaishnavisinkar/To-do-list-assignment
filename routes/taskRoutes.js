import mongoose from "mongoose";
import { create, deleteTask, getTask, updateTask } from "../controller/taskController.js"
import express from "express"
import e from "express";
const route = e.Router();

route.get("/tasks",getTask);
route.post("/task",create);
route.delete("/task/:id", deleteTask)
route.put("/task/:id",updateTask);

export default route;