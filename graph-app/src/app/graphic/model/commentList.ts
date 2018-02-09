import { Comment } from './comment';

export class CommentList {
	count: number;
	results: Comment[];

	constructor(obj? :any){
		this.count = obj && obj.count || null;
		this.results = obj && obj.results.map(res => new Comment(res)) || null;
	}
}