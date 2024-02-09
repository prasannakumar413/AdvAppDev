
package com.gift.gift.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.gift.gift.model.ProjectModel;
import com.gift.gift.service.ProjectService;

@CrossOrigin
@RestController
public class ProjectController {
    @Autowired
    ProjectService stuService;

    @GetMapping("/get")
    public List<ProjectModel> fetchDetails() {
        return stuService.getDetails();
    }

    @PostMapping("/add")
    public String addId(@RequestBody ProjectModel st) {
        stuService.add(st);
        return "Added " + st.getProductId();
    }

    @PutMapping("/update")
    public ProjectModel updateInfo(@RequestBody ProjectModel st1) {
        return stuService.updateDetails(st1);
    }

    @DeleteMapping("/delete/{productId}")
    public String deleteInfo(@PathVariable("productId") int productId) {
        stuService.deleteDetails(productId);
        return "Details deleted successfully";
    }
}
