import { Component, OnInit } from '@angular/core';
import { AppServices } from './../services/getTextfile.service'

@Component({
  moduleId: module.id,
  templateUrl: './how_do_i_join.html',
  styleUrls: ['./how_do_i_join.styles.css'],
  providers: [ AppServices ]
})

export class HowDoIJoinComponent implements OnInit {
	infoText: any;
	resData: any;

	constructor(private appService: AppServices) {
		
		this.infoText = [];

	}

	ngOnInit() { 
    	this.appService.getFile("/app/text_files/how_do_i_join.json").subscribe(
	      data => { this.resData = data},
	      err => console.error(err),
	      () => this.parseInfoText()
	    );
	}

	parseInfoText(){
		this.infoText = this.resData.descriptions;
	}

}