import { Component, OnInit } from '@angular/core';
import { AppServices } from './../services/getTextfile.service'

@Component({
  moduleId: module.id,
  templateUrl: './gtor_info.html',
  styleUrls: ['./gtor_info.styles.css'],
  providers: [ AppServices ]
})

export class GtorInfoComponent implements OnInit {
	infoText: any;
	resData: any;

	constructor(private appService: AppServices) {

		this.infoText = [];
		
	}

	ngOnInit() { 
    	this.appService.getFile("/app/text_files/gtor_info.json").subscribe(
	      data => { this.resData = data},
	      err => console.error(err),
	      () => this.parseText()
	    );
	}

	parseText(){
		this.infoText = this.resData.descriptions;
	}
}