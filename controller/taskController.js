import Task from "../model/taskModel.js"

// create task
export const create = async (req,res)=>{
    try{
        const taskData = new Task(req.body);
        const saveTask = await taskData.save();
        res.status(200).json(saveTask);
    }catch(error){
        res.status(500).json({Error : "Internal Server Error" })
    }
}

//getAllTask
export const getTask = async (req,res)=>{
    try{
        const getData = await Task.find();
        res.status(200).json(getData);
    }catch(error){
        res.status(500).json({Error : "Internal Server Error" })
    }
}
//Delete Task
export const deleteTask = async (req,res)=>{
    try{
        const id = req.params.id;
        const taskFound = await Task.findOne({_id : id});
        if(!taskFound){
            res.status(400).json({Message : "No task found "});
        }
        await Task.findByIdAndDelete(id);
        res.status(201).json({Message : "Task Deleted Successfully"})
    }catch(error){
        res.status(500).json({Error : "Internal Server Error" })
    }
}
//Update Task
export const updateTask = async (req,res)=>{
    try{
        const id = req.params.id;
        const taskExist = await Task.findOne({_id : id})
        if(!taskExist){
            res.status(400).json({Message : "The Task does not exist"});
        }
        const updateTask = await Task.findByIdAndUpdate(id,req.body,{
         new : true   
        }
        )

        res.status(201).json(updateTask)

    }catch(error){
        res.status(500).json({Error : "Internal Server Error" })
    }
}