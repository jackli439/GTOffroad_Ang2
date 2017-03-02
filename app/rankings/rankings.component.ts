import { Component, OnInit } from '@angular/core';
import { AppServices } from './../services/getTextfile.service'

@Component({
  moduleId: module.id,
  templateUrl: './rankings.html',
  styleUrls: ['./rankings.styles.css'],
  providers: [ AppServices ],
})

export class RankingsComponent implements OnInit {
	rankings: any;
	resData: any;

	constructor(private appService: AppServices) {

		this.rankings = [];

	}

	ngOnInit() { 
    	this.appService.getFile("/app/text_files/rankings.json").subscribe(
	      data => { this.resData = data},
	      err => console.error(err),
	      () => this.parseRankings()
	    );
	}

	parseRankings(){

		var obj = this.resData;
		var tempArr: any = []
		Object.keys(obj).forEach(function(key, index) {
			obj[key.toString()]["year"] = key.toString();
		    tempArr.push(obj[key]);
		});
		this.rankings = tempArr;

		this.rankings.sort(this.compareRankYear);
		
	}

	compareRankYear(a: any,b: any){
		if (a.year > b.year){
			return -1;
		}
		if (a.year < b.year){
			return 1;
		}
		return 0;
	}

}