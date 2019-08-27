import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_KEY = environment.API_KEY;
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  private withBaseUrl(path: string) {
    return `${this.baseUrl}${path}?api_key=${this.API_KEY}`;
  }

  getPopularMovies() {
    return this.http.get(this.withBaseUrl('movie/popular'))
    .pipe(
      map((response: any) => response.results)
    );
  }

  getMovie(id: string) {
    return this.http.get(this.withBaseUrl(`movie/${id}`));
  }

}
