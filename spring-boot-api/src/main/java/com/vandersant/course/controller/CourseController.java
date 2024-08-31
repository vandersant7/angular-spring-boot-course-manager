package com.vandersant.course.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vandersant.course.models.Course;
import com.vandersant.course.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController //informa que essa classe contém um endpoint
@RequestMapping("/api/courses") //tem a função de dizer que a url que ficará exposta
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;

    

    //@RequestMapping(method = RequestMethod.GET) isso faz a mesma coisa que a notação @GetMapping
    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }
    
}
