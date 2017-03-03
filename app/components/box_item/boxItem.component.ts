import { Component, OnInit, Input, trigger, transition, style, animate, state} from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'box-item',
  templateUrl: './box_item.html',
  styleUrls: ['./box_item.styles.css'],
  animations: [
    trigger(
      'myAnimation',
      [
      transition(
        ':enter', [
          style({opacity: 0}),
          animate('500ms', style({opacity: 1}))
        ]
      ),
      transition(
        ':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0})),
          
        ]
      )]
    )
  ]
})
export class BoxItemComponent implements OnInit{
	@Input() boxData: any;
	@Input() boxNum: any;

	imageCycle: any;
	currentSlide: any;

	timerSub: Subscription;

	ngOnInit() {
	    this.imageCycle = [];
	    var totalImages = 14
	    for(var i = 1; i <= totalImages; i++){
	        this.imageCycle.push({
	            src:'/app/images/gallery/img-cycle' + i + '.jpg',
				num: i
	        })
	    }
	}

	constructor(){

		this.currentSlide = 1;
	    let timer = Observable.timer(5000,5000);
	    this.timerSub = timer.subscribe(t=> {
	        this.changeSlide(1);
	    });

	}

	changeSlide(direction: number){
		
		this.timerSub.unsubscribe();
		
		if (direction == 0){
			this.currentSlide = this.currentSlide - 1;
			if (this.currentSlide < 1){
				this.currentSlide = this.imageCycle.length;
			}
		} else {
			this.currentSlide = this.currentSlide + 1;
			if (this.currentSlide > this.imageCycle.length){
				this.currentSlide = 1;
			}
		}
		
		let timer = Observable.timer(5000,5000);
		this.timerSub = timer.subscribe(t=> {
	        this.changeSlide(1);
	    });
	    
	}

}
