import { Component, OnInit } from '@angular/core';
import { AppServices } from './../services/getTextfile.service'
import { OrderByPipe } from './../pipes/sortRank.pipe'

@Component({
  moduleId: module.id,
  templateUrl: './rankings.html',
  styleUrls: ['./rankings.styles.css'],
  providers: [ AppServices ],
  pipes[ OrderByPipe ]
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
		var tempArr = []
		Object.keys(obj).forEach(function(key) {
		    tempArr.push(obj[key]);
		});
		this.rankings = tempArr;

		this.rankings.sort(this.compareRankYear);
		
		console.log(this.rankings);
		
	}

	compareRankYear(a,b){
		if (a.year > b.year){
			return -1;
		}
		if (a.year < b.year){
			return 1;
		}
		return 0;
	}

}