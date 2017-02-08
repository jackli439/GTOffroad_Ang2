import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { GtorInfoComponent } from './gtor_info/gtor_info.component';
import { BoxItemComponent } from './components/box_item/boxItem.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
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
    BoxItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
