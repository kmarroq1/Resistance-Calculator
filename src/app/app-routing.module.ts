import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResistorComponent } from './calculator/resistor/resistor.component';

const routes: Routes = [{ path: '**', component: ResistorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
