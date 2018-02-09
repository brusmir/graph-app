export class Comment {
	cards: number;
	text: string;
	author: string;
	date: string;
	_id: number;

	constructor(obj? :any){
		this.cards = obj && obj.cards || null;
		this.text = obj && obj.text || null;
		this.author = obj && obj.author || null;
		this.date = obj && obj.date || null;
		this._id = obj && obj._id || null;
	}
}