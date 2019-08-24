import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieId: string;

  constructor(
    private router: ActivatedRoute
  ) {    
   }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
        this.movieId = params.get('id');
    })
  }

}
