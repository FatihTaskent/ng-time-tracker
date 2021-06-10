import { Component, OnInit } from '@angular/core';
import { Project } from '../core/models/project';
import { ProjectService } from '../core/services/project.service'


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

}
