import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MoviesService } from '../movies.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  
  imgPrefix:string = "https://image.tmdb.org/t/p/w500";

  type:any;
  id:any;
  tvDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService,private _location:Location) {


    this.type  = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id  = _ActivatedRoute.snapshot.paramMap.get('id');

    if (this.type ='undefined') {
      this.type='tv'
    }
    else {
      this.type=this.type
    }
    
    _MoviesService.getItemDetails(this.type, this.id).subscribe((data) => {

      this.tvDetails = data;
    });
  }
  

   backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
