import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

const routes: Routes = [
  { path: 'comp-two', component: CompTwoComponent}
];
@NgModule({
  declarations: [AppComponent, CompTwoComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
