import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompDefaultComponent } from './comp-default/comp-default.component';
import { CompThreeComponent } from './comp-three/comp-three.component';

const routes: Routes = [
  { path: 'comp-two', component: CompTwoComponent}
];
@NgModule({
  declarations: [AppComponent, CompTwoComponent, CompDefaultComponent, CompThreeComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
