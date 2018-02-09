import { Component, OnInit } from '@angular/core';

import { GraphicService } from './service/graphic.service';
import { Graphic } from './model/graphic';

@Component({
  selector: 'gf-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
	private numberOfCards: number;
	private cards: Graphic[];
  private params = {    
    page: 1,
    pageSize: 5    
  }

  constructor(private graphicService: GraphicService) { }

  ngOnInit() {
  	this.getGraphics();
  }

  getGraphics(){
    this.graphicService.getGraphics(this.params).subscribe(res => {
      this.numberOfCards = res.count;
      this.cards = res.results;
    })
  }

  updateParams(param){
    if(param){
      this.params.page = param.page || this.params.page;
      this.params.pageSize = param.pageSize || this.params.pageSize;
    }
    this.getGraphics();
  }

}
