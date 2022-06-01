import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenre, IMovies} from "../interfaces";
import {urls} from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  getMovies(page: number):Observable<{ page: number; results:IMovies[] }>{
    return this.httpClient.get<{ page: number; results: IMovies[] }>(urls.movies,{ params: { page } })
  }

  getMovie(id:number|string):Observable< {page: number; results: IMovies}>{
    return  this.httpClient.get<{page: number; results: IMovies}>(urls.movies +`${id}`)
  }

  getGenres():Observable<{ genres: IGenre[] }>{
    return this.httpClient.get<{genres: IGenre[]}>(urls.genres+`/movies`)
  }
  getMoviesByGenre(genreId:number):Observable<{page: number; results: IMovies[]}>{
    return  this.httpClient.get<{page: number; results: IMovies[]}>(urls.genres+`${genreId}` + `/movies`)
};


}
