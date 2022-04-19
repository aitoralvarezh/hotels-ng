import { Component, Input, OnInit } from '@angular/core';
import { ILink } from './models/link.model';

@Component({
  selector: 'app-icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss']
})
export class IconLinkComponent implements OnInit {
  @Input() link: ILink = { path: '', img: '', alt: '' }

  constructor() { }

  ngOnInit(): void {
  }

}
