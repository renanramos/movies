import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieId: string;
  movieDetail: any = {};

  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      this.moviesService.getMovie(this.movieId)
        .subscribe((movieDetail: any) => {
          this.movieDetail = movieDetail;
        });
    });
  }
}
