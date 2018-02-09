import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { GraphicList } from '../model/graphicList';
import { CommentList } from '../model/commentList';
import { Graphic } from '../model/graphic'; 
import { Comment } from '../model/comment';

const baseUrl = "http://localhost:3000/api/cards";

@Injectable()
export class GraphicService {

  constructor(private http: HttpClient) { }

  getGraphics(params? :any):Observable<GraphicList>{
  	let queryParams = {};
		if(params){
			queryParams = {
				params : new HttpParams()
				.set("page", params.page && params.page.toString() || "")
        .set("pageSize", params.page && params.pageSize.toString() || "")
      }
    }
  	return this.http.get(baseUrl, queryParams).map(res => new GraphicList(res))
  }

  getComments(id):Observable<CommentList>{
  	return this.http.get(baseUrl + "/" + id + "/comments").map( res => new CommentList(res))
  }

  updateCard(card: Graphic):Observable<Graphic>{
    return this.http.put(baseUrl + "/" + card._id, card).map(res => new Graphic(res));
  }

  addComment(comment: Comment):Observable<Comment>{
    return this.http.post(baseUrl + "/" + comment.cards + "/comments", comment).map(res => new Comment(res))
  }

}
