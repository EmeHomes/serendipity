package com.serendipity.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;



@Entity(name = "Role")
public class Role{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String role;
}
