package com.serendipity.task;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class TaskService {
    private static List<Task> tasks = new ArrayList<>();

    static {
        tasks.add(new Task(1, 2, "Construcción del Entorno", "Desarrollad o contratad un entorno en el que desplegar vuestra aplicación", new Date(), new Date(), 1));
        tasks.add(new Task(2, 2, "Desarrollad las interfaces", "Comprensión y desarrollo del contenido de cada una de las clases", new Date(), new Date(), 1));
        tasks.add(new Task(3, 1, "Desarrollo de la API", "Desarrollo de la API que embeberá de datos  a la aplicación web y a la aplicación Android", new Date(), new Date(), 1));
        tasks.add(new Task(4, 2, "Avance en las etiquetas", "Desarrollo de las partes elegidas junto que el product owner", new Date(), new Date(), 1));
        tasks.add(new Task(5, 1, "Maquetado base", "Comienzo de la maquetación, desarrollo de la primera versión del FrontEnd", new Date(), new Date(), 1));
        tasks.add(new Task(6, 1, "Desarrollo de la BBDD", "Y por supuesto el desarrollo de un diagrama de clases. Creación de tablas, clases y relaciones", new Date(), new Date(), 1));
    }

    public List<Task> findAll() {
        return tasks;
    }

    public Task save(Task task) {
        tasks.add(task);
        return task;
    }

    public Task find(int id) {
        for (Task task:tasks) {
            if (id == task.getId()) {
                return task;
            }
        }

        return null;
    }

    public List<Task> findAllByUser(int UserId) {

        List<Task> tasksFound = new ArrayList<>();
        for (Task task:tasks) {
            if (UserId == task.getUserId()) {
                tasksFound.add(task);
            }
        }

        return tasksFound;
    }

}
