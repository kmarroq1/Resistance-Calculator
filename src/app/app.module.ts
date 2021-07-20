import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResistanceCalculatorService } from './services/resistance-calculator.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistorComponent } from './calculator/resistor/resistor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ResistorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ResistanceCalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
