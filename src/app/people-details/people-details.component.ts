import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
import { MoviesService } from '../movies.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  imgPrefix:string="https://image.tmdb.org/t/p/w500";

  type:any;
  id:any;
  peopleDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService,private _location:Location) {


    this.type  = _ActivatedRoute.snapshot.paramMap.get('type');
    this.id  = _ActivatedRoute.snapshot.paramMap.get('id');


    _MoviesService.getPersonDetails(this.id).subscribe((data) => {
      console.log(data);
      

        this.peopleDetails = data;
    })
   }
   backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
