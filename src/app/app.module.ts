import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';

const routes: Routes = [
  { path: 'comp-two', component: CompTwoComponent},
  { path: 'comp-three', component: CompThreeComponent}
];
@NgModule({
  declarations: [AppComponent, CompTwoComponent, CompThreeComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
