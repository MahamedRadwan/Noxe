import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies: any[];
  mediaType: string;
  

  imgPrefix:string = "https://image.tmdb.org/t/p/w500";
  constructor(private _MoviesService: MoviesService) {


    _MoviesService.getTrending('movies').subscribe((data) => {

      // data.results.sort(function (a, b) {
      //   return a.vote_average - b.vote_average;
      // });

      this.trendingMovies = data.results.reverse().slice(0, 20);

    });
    
  }
  getAllMovies(mediaType) {
   this._MoviesService.getMovies(mediaType,1).subscribe((data) => {
      
     this.trendingMovies = data.results;   
   });
  }

  // getMoviesPages(mediaType,pageNumber) {
    
  //   this._MoviesService.getMovies(mediaType, pageNumber).subscribe((data) => {
  //     this.totalPages = data.total_pages;
  //     console.log(this.totalPages);
      

  //   });
  // }


  ngOnInit(): void {
  }

}
