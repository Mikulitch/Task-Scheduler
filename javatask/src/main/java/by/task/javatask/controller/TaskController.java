package by.task.javatask.controller;


import by.task.javatask.exception.ResourceNotFoundException;
import by.task.javatask.model.Task;
import by.task.javatask.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    //get all tasks
    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }


    //create employee
    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task) {
        return taskRepository.save(task);
    }

    //get employee by id rest api
    @GetMapping("/tasks/{id}")
    public ResponseEntity<Task> getTaskByID(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Task not exist with id :" +id));
        return ResponseEntity.ok(task);
    }

    // update employee rest api
    @PutMapping("/tasks/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task taskDetails){
        Task task = taskRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Task not exist with id :" +id));
        task.setTaskName(taskDetails.getTaskName());
        task.setStartWork(taskDetails.getStartWork());
        task.setFinishWork(taskDetails.getFinishWork());
        task.setWorkHours(taskDetails.getWorkHours());
        task.setStatus(taskDetails.getStatus());



        Task updatedTask = taskRepository.save(task);
        return ResponseEntity.ok(updatedTask);

    }
    @DeleteMapping("/tasks/{id}")
    public ResponseEntity <Map<String, Boolean>> deleteTask(@PathVariable Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not exist with id :" + id));
        taskRepository.delete(task);
        Map<String, Boolean> responce = new HashMap<>();
        responce.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(responce);
    }



}
