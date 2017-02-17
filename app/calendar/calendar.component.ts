import { Component, OnInit } from '@angular/core';
import { AppServices } from './../services/getTextfile.service'
declare var gapi: any;

@Component({
  moduleId: module.id,
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.styles.css'],
  providers: [ AppServices]
})

export class CalendarComponent implements OnInit {
	boxes: any;
	resData: any;

	constructor(private appService: AppServices) {
		this.boxes = [
			1,2,3,4,5,6
		];
	}

	ngOnInit() { 
    	this.appService.getFile("/app/text_files/mainpage_boxes.json").subscribe(
	      data => { this.resData = data},
	      err => console.error(err),
	      () => this.parseBoxes()
	    );


	}

	parseBoxes(){
		this.boxes = [
           	this.resData.Calendar,
            this.resData.WhatIsGtor,
            this.resData.HowDoIJoin,
            this.resData.Interested,
            this.resData.PhotosAndVid,
            this.resData.History,
            this.resData.Rankings,
            this.resData.Contact,
            this.resData.Sponsors
		];

		for (let box of this.boxes){
			box.hover = false;
		}

		console.log(this.boxes);
	}

}


