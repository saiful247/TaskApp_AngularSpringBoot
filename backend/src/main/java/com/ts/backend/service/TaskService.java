package com.ts.backend.service;

import com.ts.backend.model.Task;
import com.ts.backend.repo.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepo repo;

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task getTaskById(Long id) {
        return repo.findById(id).get();
    }

    public Task createTask(Task task) {
        return repo.save(task);
    }

    public Task updateTask(Long id,Task updatedtask) {
        return repo.findById(id).map(task->{
        task.setTitle(updatedtask.getTitle());
        task.setDescription(updatedtask.getDescription());
        task.setStatus(updatedtask.getStatus());
        task.setCreatedAt(updatedtask.getCreatedAt());
        return repo.save(task);
        }).orElse(null);
    }

    public boolean deleteTask(Long id) {
        if(repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        }
        return false;
    }
}
