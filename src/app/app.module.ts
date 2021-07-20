import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResistanceCalculatorService } from './services/resistance-calculator.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ResistanceCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
