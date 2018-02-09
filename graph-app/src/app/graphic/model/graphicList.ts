import { Graphic } from './graphic';

export class GraphicList {
	count: number;
	results: Graphic[];

	constructor(obj? :any){
		this.count = obj && obj.count || null;
		this.results = obj && obj.results.map(res => new Graphic(res)) || [];
	}
}