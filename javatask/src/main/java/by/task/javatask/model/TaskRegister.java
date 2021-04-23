package by.task.javatask.model;


import javax.persistence.*;

@Entity
@Table(name = "task_register")
public class TaskRegister {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "id_employee")
    private long idEmployee;
    @Column(name = "id_task")
    private long idTask;

    public TaskRegister() {
    }

    public TaskRegister(long idEmployee, long idTask) {
        this.idEmployee = idEmployee;
        this.idTask = idTask;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(long idEmployee) {
        this.idEmployee = idEmployee;
    }

    public long getIdTask() {
        return idTask;
    }

    public void setIdTask(long idTask) {
        this.idTask = idTask;
    }
}
