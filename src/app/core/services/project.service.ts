import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  private readonly projectsKLsKey : string = "projects"

  constructor() { }


  getProjects() : Project[] {
    let projectsString = localStorage.getItem(this.projectsKLsKey) ?? "[]";

    return JSON.parse(projectsString);
  }

  addProject(newProject: Project) : void {
    let projects = this.getProjects();

    projects.push(newProject);

    localStorage.setItem(this.projectsKLsKey, JSON.stringify(projects));
  }

}