import express from "express"
import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    assignedTo : {
        type : String,
        required : true
    },
    status :{
        type : String,
        required : true
    },
    dueDate : {
        type : Date,
        required : true,
    },
    priority : {
        type : String,
        required : true
    },
    comments :{
        type :String,
        required : true
    }

})

export default mongoose.model("task",taskSchema);