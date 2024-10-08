package com.huandemberg.todosimple.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.huandemberg.todosimple.models.Task;
import com.huandemberg.todosimple.models.projection.TaskProjection;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    
    List<TaskProjection> findByUser_Id(Long id);


    // @Query(value = "SELECT t FROM t WHERE t.user.id  = :id")
    // List<Task> findByUser_id(@Param("id") Long id);

    // @Query(value = "SELECT * FROM task t WHERE t.user_ide = :id" ,nativeQuery = true)
    // List<Task> findByUser_id(@Param("id") Long id);
}
