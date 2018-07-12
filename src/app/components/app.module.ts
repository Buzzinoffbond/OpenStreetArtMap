import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ArtworkCardComponent } from "./artwork-card/artwork-card.component";
import { MapComponent } from "./map/map.component";
import { PanelComponent } from "./panel/panel.component";
import { AppService } from "../services/app.service";

@NgModule({
  declarations: [
    AppComponent,
    ArtworkCardComponent,
    MapComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyBK-r-NHQVjOjSyguISvKi5tneb953Qi_E'
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
