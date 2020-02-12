import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FearnotExerciseComponent } from './fearnot-exercise/fearnot-exercise.component';


const routes: Routes = [
  { path: '', component: FearnotExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
