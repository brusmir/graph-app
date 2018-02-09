import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gf-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
	@Input() private activePage: number;
	@Input() private totalItems: number;
	@Input() private pageSize: number;
	private numberOfPages: number;
	@Output() private onPageChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  	this.numberOfPages = Math.ceil(this.totalItems/this.pageSize);
  }

  pageChange(page){
  	if(page >= 1 && page <= this.numberOfPages){
    	this.activePage = page;
    	this.onPageChange.emit({page: this.activePage});
    }  
  }
}
