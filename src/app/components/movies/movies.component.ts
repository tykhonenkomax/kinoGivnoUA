import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services";
import {IGenre, IMovies} from "../../interfaces";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  page:number;
  movies!:IMovies[];

  constructor(private moviesService:MoviesService) {
    this.page = 1;
  }

  ngOnInit(): void {

  }

  getMovies = (page: number) =>
    this.moviesService.getMovies(page).subscribe((res) => {
      this.movies = res.results;
    });



}
