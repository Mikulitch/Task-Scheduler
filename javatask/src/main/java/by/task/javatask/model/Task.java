package by.task.javatask.model;

import javax.persistence.*;
import java.util.Calendar;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name ="id_project")
    private long idProject;
    @Column(name= "task_name")
    private String taskName;
    @Column(name = "work_hours")
    private float workHours;
    @Column(name = "start_work")
    private Calendar startWork;
    @Column(name = "finish_work")
    private Calendar finishWork;
    @Column(name = "status")
    private String status;

    public Task() {
    }

    public Task(long idProject, String taskName, float workHours, Calendar startWork, Calendar finishWork, String status) {
        this.idProject = idProject;
        this.taskName = taskName;
        this.workHours = workHours;
        this.startWork = startWork;
        this.finishWork = finishWork;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdProject() {
        return idProject;
    }

    public void setIdProject(long idProject) {
        this.idProject = idProject;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public float getWorkHours() {
        return workHours;
    }

    public void setWorkHours(float workHours) {
        this.workHours = workHours;
    }

    public Calendar getStartWork() {
        return startWork;
    }

    public void setStartWork(Calendar startWork) {
        this.startWork = startWork;
    }

    public Calendar getFinishWork() {
        return finishWork;
    }

    public void setFinishWork(Calendar finishWork) {
        this.finishWork = finishWork;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
