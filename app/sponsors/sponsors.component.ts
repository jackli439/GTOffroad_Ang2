import { Component, OnInit } from '@angular/core';
import { AppServices } from './../services/getTextfile.service'

@Component({
  moduleId: module.id,
  templateUrl: './sponsors.html',
  styleUrls: ['./sponsors.styles.css'],
  providers: [ AppServices ]
})

export class SponsorsComponent implements OnInit {
	sponsors: any;
	resData: any;

	constructor(private appService: AppServices) {
		this.sponsors = [];


	}

	ngOnInit() { 
    	this.appService.getFile("/app/text_files/sponsors.json").subscribe(
	      data => { this.resData = data},
	      err => console.error(err),
	      () => this.parseSponsors()
	    );
	}

	parseSponsors(){
		this.sponsors = this.resData.sponsors;
		console.log(this.sponsors);
	}

}