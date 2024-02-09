package com.gift.gift.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gift.gift.model.ProjectModel;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectModel, Integer> {

}
