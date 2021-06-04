import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MoviesService } from '../movies.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {

  imgPrefix:string = "https://image.tmdb.org/t/p/w500";

  type:any;
  id:any;
  movieDetails: any;
  tvDetails: any;
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService, private _location: Location) {


    this.type = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id = _ActivatedRoute.snapshot.paramMap.get('id');

    if (this.type == 'undefined') {
      this.type = 'movie'
    }
    else {
      this.type = this.type
    }
    
    _MoviesService.getItemDetails(this.type, this.id).subscribe((data) => {

      this.movieDetails = data;
    });
  }

   backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
  }

}
