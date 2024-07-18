package com.huandemberg.todosimple.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.huandemberg.todosimple.services.UserService;

@RestController
@RequestMapping("/user")
@Validated
public class UserController {   
    
    @Autowired
    private UserService userService;

    @GetMapping("/(id)")
    public ResponseEntity<User> findById(Long id)
    
}
