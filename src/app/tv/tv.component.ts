import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  trendingTv: any[];
  mediaType: string;
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  constructor(private _MoviesService: MoviesService) {


    
    _MoviesService.getTrending('tv').subscribe((data) => {

      this.trendingTv = data.results.slice(0, 20);

    });
  }
  getAllShows(mediaType)
  {
    this._MoviesService.getTvShows(mediaType).subscribe(
      (data) => {
        this.trendingTv = data.results.slice(0, 20);
      }
    );

  }
  
 
  ngOnInit(): void {
  }

}
