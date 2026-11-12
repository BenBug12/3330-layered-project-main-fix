import tasksService from "../services/tasks.services.js";

const getTasks = (req, res, next) => {
    try{
        const allTasks = tasksService.getAllTasks(); 
        res.status(200).json({
            success: true,
            data: allTasks
        });
    }catch(error){
        next(error);
    }
}

const createTask = (req, res, next) => {
    try{
        //const params = req.body;
        const newTask = tasksService.createTask(req.body);
        //db.push(newTask); 

        res.status(201).json({
            success: true,
            data: newTask
        });
    }catch(error){
        next(error);
    }
    return task;
}



export default {
    getTasks,
    createTask,
};