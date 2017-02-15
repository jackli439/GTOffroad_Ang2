import { Component, OnInit } from '@angular/core';
import { AppServices } from './../../services/getTextfile.service'

@Component({
  moduleId: module.id,
  selector: 'news',
  templateUrl: './news.html',
  styleUrls: ['./news.styles.css'],
  providers: [ AppServices ]
})
export class NewsComponent implements OnInit {
	
	news: any;

	constructor (private appService: AppServices) {
		this.news = {
			news : ""
		}
	}

	ngOnInit() { 
		this.getNews();
	}

	getNews(){
    	this.appService.getFile("/app/text_files/news.json").subscribe(
	      data => { this.news = data},
	      err => console.error(err)
	    );
	}

}
