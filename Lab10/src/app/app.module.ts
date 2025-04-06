import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { HhService } from './services/hh.service';


@NgModule({
  imports: [

    BrowserModule,
    HttpClientModule 
  ],
  providers: [HhService], 
  
})
export class AppModule {}
