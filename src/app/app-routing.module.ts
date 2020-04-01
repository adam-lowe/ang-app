import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CompTwoComponent } from './comp-two/comp-two.component';


const routes: Routes = [
  { path: 'comp-two', component: CompTwoComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
