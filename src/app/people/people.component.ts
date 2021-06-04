import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  allPeople: any[];
  mediaType: string;
  imgPrefix: string = "https://image.tmdb.org/t/p/w500";


  constructor(private _MoviesService: MoviesService) {

    _MoviesService.getTrending('person').subscribe((data) => {
      this.allPeople = data.results;

    });

  }
  getAllPeople(mediaType) {
    this._MoviesService.getPeople(mediaType).subscribe((data) => {
      this.allPeople = data.results
    });
  };

  ngOnInit(): void {
  }
}
