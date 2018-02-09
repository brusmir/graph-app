import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GraphicService } from '../service/graphic.service';
import { Comment } from '../model/comment';

@Component({
  selector: 'gf-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	private comments: Comment[];
  private comment: Comment = new Comment();
  private id: number;

  constructor(private graphicService: GraphicService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe( params => {
  		let id = parseInt(params['id']);
			this.graphicService.getComments(id).subscribe(res => this.comments = res.results);
      this.id = id;
		});
  }

  saveComment(){
    this.comment.date = (new Date).toISOString();
    this.comment.cards = this.id;
    this.graphicService.addComment(this.comment).subscribe(res => this.comments.push(res));
    this.comment = new Comment();
  }

}
