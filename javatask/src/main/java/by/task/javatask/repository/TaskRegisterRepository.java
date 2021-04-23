package by.task.javatask.repository;



import by.task.javatask.model.TaskRegister;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRegisterRepository extends JpaRepository<TaskRegister, Long> {
}
