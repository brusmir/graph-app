import { Component, OnInit, Input } from '@angular/core';

import { Graphic } from '../../model/graphic';
import { GraphicService } from '../../service/graphic.service';

@Component({
  selector: 'gf-graph-item',
  templateUrl: './graph-item.component.html',
  styleUrls: ['./graph-item.component.css']
})
export class GraphItemComponent implements OnInit {
	@Input() private card: Graphic;
	

  constructor(private graphicService: GraphicService) { }

  ngOnInit() {
  }

  // updateCard(grade: number){
  // 	let tempCard = new Graphic(this.card);
  //   tempCard.grade = grade;
  // 	this.graphicService.updateCard(tempCard).subscribe(res => {
  //     this.card = res;
  //   });;  	
  // }

}
