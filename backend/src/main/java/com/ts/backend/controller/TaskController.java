package com.ts.backend.controller;

import com.ts.backend.model.Task;
import com.ts.backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TaskController {

    @Autowired
    private TaskService service;

    @GetMapping("/task")
    public ResponseEntity<List<Task>> getAllTasks() {
        return new ResponseEntity<>(service.getAllTasks(), HttpStatus.OK);
    }

    @GetMapping("/task/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id){
        Task task=service.getTaskById(id);

        if(task!=null)
            return new ResponseEntity<>(task, HttpStatus.OK);
        else return new ResponseEntity<>(task,HttpStatus.NOT_FOUND);
    }

    @PostMapping("/task/create")
    public ResponseEntity<Task> createTask(@RequestBody Task task){
        Task newtask = service.createTask(task);

        return new ResponseEntity<>(newtask, HttpStatus.CREATED);
    }

    @PutMapping("/task/update/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task task){
        Task updTask = service.updateTask(id,task);

        if(updTask!=null)
            return new ResponseEntity<>(updTask, HttpStatus.OK);
        else return new ResponseEntity<>(updTask,HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/task/delete/{id}")
    public ResponseEntity<Task> deleteTask(@PathVariable Long id){
        boolean dlted = service.deleteTask(id);

        if (dlted)
            return new ResponseEntity<>(HttpStatus.OK);
        else return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
}
