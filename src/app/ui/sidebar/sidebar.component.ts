import { Component, OnInit } from '@angular/core';
import { ILink } from '../icon-link/models/link.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  links: ILink[] = [
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
