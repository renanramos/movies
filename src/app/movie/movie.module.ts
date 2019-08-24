import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { Route, RouterModule } from '@angular/router';

const movieRoutes: Route[] = [
  { path: 'movies', component: MoviesListComponent, children: [
    { path: ':id', component: MovieDetailComponent }
  ] },
]

@NgModule({
  declarations: [MovieDetailComponent, MovieItemComponent, MoviesListComponent],
  imports: [
    RouterModule.forChild(movieRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class MovieModule { }
