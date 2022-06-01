import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../interfaces";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

 @Input()
 movie: IMovies;
 posterPath: string|number;

  constructor() { }



  ngOnInit(): void {
    this.posterPath = `https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`;
  }

}
