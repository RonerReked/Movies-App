import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';

const routes: Routes = [
  { path: '', component: MoviesHomeComponent },
  { path: 'addMovie', component: AddMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
