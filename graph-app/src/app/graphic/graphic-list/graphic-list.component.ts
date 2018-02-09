import { Component, OnInit, Input } from '@angular/core';

import { Graphic } from '../model/graphic';

@Component({
  selector: 'gf-graphic-list',
  templateUrl: './graphic-list.component.html',
  styleUrls: ['./graphic-list.component.css']
})
export class GraphicListComponent implements OnInit {
	@Input() private cards: Graphic[];

  constructor() { }

  ngOnInit() {
  }

}
