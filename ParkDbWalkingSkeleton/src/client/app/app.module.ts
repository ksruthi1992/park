import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LotsComponent } from './lots.component';

import { LotService } from './lot.service';

@NgModule({
  declarations: [
    AppComponent,
    LotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
