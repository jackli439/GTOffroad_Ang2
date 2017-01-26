import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
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
  	MainpageComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
