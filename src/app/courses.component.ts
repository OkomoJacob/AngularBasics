import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <div id = "courses"> "#courses"
    template: `<h2>{{ "Courses: " + getTitle() }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    `
})

export class CoursesComponent {
    title = "List of courses";
    getTitle(){
        return this.title;
    }
    courses: any;
    
    // Initialize the courses service
    constructor(service: CoursesService){
        this.courses = service.getAuthors();
    }
}