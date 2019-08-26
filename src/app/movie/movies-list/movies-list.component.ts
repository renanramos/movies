import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {
 
  movies: [];
  subscription: Subscription;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.subscription = this.moviesService.getPopularMovies()
      .subscribe((movies: any) => {
        this.movies = movies;
      });
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
