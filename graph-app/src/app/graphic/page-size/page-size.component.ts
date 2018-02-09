import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gf-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.css']
})
export class PageSizeComponent implements OnInit {
	private pages: number[] = [5,10,20];
	@Input() private pageSize: number;
	@Input() private activePage: number;
	@Output() private onPageSizeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pageSizeChange(page){
  	this.pageSize = page;
  	this.onPageSizeChange.emit({pageSize: this.pageSize, page: 1});
  }

}
