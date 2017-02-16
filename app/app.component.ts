import { Component, ViewChild, ElementRef} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.styles.css']

})
export class AppComponent{
	@ViewChild('pageTop') input:ElementRef; 

	constructor(router:Router) {
		router.events.forEach((event) => {
			if(event instanceof NavigationEnd) {
				this.input.nativeElement.scrollTop = 0;
			}
		});
	}
}
