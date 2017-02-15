import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { GtorInfoComponent } from './gtor_info/gtor_info.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HowDoIJoinComponent } from './how_do_i_join/how_do_i_join.component';
import { InterestedComponent } from './interested/interested.component';
import { RankingsComponent } from './rankings/rankings.component';
import { SponsorsComponent } from './sponsors/sponsors.component';


import { BoxItemComponent } from './components/box_item/boxItem.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { NewsComponent } from './components/news/news.component'
import { routing } from './app.routes';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [ 
  	AppComponent,
  	MainpageComponent,
    GtorInfoComponent,
    CalendarComponent,
    HowDoIJoinComponent,
    InterestedComponent,
    RankingsComponent,
    SponsorsComponent,
    BoxItemComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
