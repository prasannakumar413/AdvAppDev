package com.gift.gift.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gift.gift.repository.ProjectRepository;
import com.gift.gift.model.ProjectModel;

@Service
public class ProjectService {
    @Autowired
    ProjectRepository stRepo;

    @SuppressWarnings("null")
    public String add(ProjectModel m) {
        stRepo.save(m);
        return "Added " + m.getProductId(); // Updated to use SellerId as the identifier
    }

    public List<ProjectModel> getDetails() {
        return stRepo.findAll();
    }

    @SuppressWarnings("null")
    public ProjectModel updateDetails(ProjectModel m) {
        return stRepo.saveAndFlush(m);
    }

    public void deleteDetails(int productId) { // Updated to use SellerId as the identifier
        stRepo.deleteById(productId);
    }

}
