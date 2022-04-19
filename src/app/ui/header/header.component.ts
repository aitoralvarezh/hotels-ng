import { Component, OnInit } from '@angular/core';
import { ILink } from '../icon-link/models/link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: ILink[] = [
    {
      path: '',
      img: '../../../assets/img/SVG/bookmark.svg',
      alt: 'icon',
    },
    {
      path: '',
      img: '../../../assets/img/SVG/chat.svg',
      alt: 'icon',
    },
    {
      path: '',
      img: '../../../assets/img/SVG/bookmark.svg',
      alt: 'icon',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
