import { Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'box-item',
  templateUrl: './box_item.html',
  styleUrls: ['./box_item.styles.css']
})
export class BoxItemComponent{
	@Input() boxData: any;
	@Input() boxNum: any;

	test: string;
	constructor(){}
}
