import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  constructor(private http: HttpClient) {}

  //baseur1 = 'https://api.themoviedb.org/3';
  //apikey = 'Create an account on moviedb api , and get an API key ';

  //bannerapidata

  bannerApiData(): Observable<any> {
    return this.http.get(
      `${this.baseur1}/trending/all/week?api_key=${this.apikey}`
    );
  }

  // trendingmoviesapidata
  trendingMoviesApiData(): Observable<any> {
    return this.http.get(
      `${this.baseur1}/trending/movie/day?api_key=${this.apikey}`
    );
  }

  // searcmovie
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');
    return this.http.get(
      `${this.baseur1}/search/movie?api_key=${this.apikey}&query=${data.movieName}`
    );
  }
  // moviedetails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(
      `${this.baseur1}/movie/${data}?api_key=${this.apikey}`
    );
  }

  // MovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(
      `${this.baseur1}/movie/${data}/videos?api_key=${this.apikey}`
    );
  }

  // MovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(
      `${this.baseur1}/movie/${data}/credits?api_key=${this.apikey}`
    );
  }
  // Action
  // action
  fetchActionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=28`
    );
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(
      `${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=12`
    );
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(
      `${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=16`
    );
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(
      `${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=35`
    );
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(
      `${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=99`
    );
  }

  // science-fiction:878

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(
      `${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=878`
    );
  }

  // thriller:53
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(
      `${this.baseur1}/discover/movie?api_key=${this.apikey}&with_genres=53`
    );
  }
}
