package by.task.javatask.controller;


import by.task.javatask.exception.ResourceNotFoundException;
import by.task.javatask.model.Project;
import by.task.javatask.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ProjectController {
    @Autowired
    private ProjectRepository projectRepository;

    //get all project
    @GetMapping("/projects")
    public List<Project> getAllProgects() {
        return projectRepository.findAll();
    }

    //create employee
    @PostMapping("/projects")
    public Project createProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }

    //get employee by id rest api
    @GetMapping("/projects/{id}")
    public ResponseEntity<Project> getProjectByID(@PathVariable Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Project not exist with id :" +id));
        return ResponseEntity.ok(project);
    }

    // update employee rest api
    @PutMapping("/projects/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project projectDetails){
       Project project = projectRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Project not exist with id :" +id));
        project.setFullName(projectDetails.getFullName());
        project.setShortName(projectDetails.getShortName());
        project.setDiscription(projectDetails.getDiscription());


        Project updatedProject = projectRepository.save(project);
        return ResponseEntity.ok(updatedProject);

    }
    //delete employee rest api
    @DeleteMapping("/projects/{id}")
    public ResponseEntity <Map<String, Boolean>> deleteProject(@PathVariable Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not exist with id :" + id));
        projectRepository.delete(project);
        Map<String, Boolean> responce = new HashMap<>();
        responce.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(responce);
    }


}
