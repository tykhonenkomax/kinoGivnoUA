import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../interfaces";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

}
