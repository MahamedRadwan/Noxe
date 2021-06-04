import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) {


  }

  getTrending(mediaType): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }

  getItemDetails(mediaType, id) {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-US`)
  }

  getPersonDetails(id) {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=112ddfb027f773c77a2b3e7a15357e1f&language=en-US`)
  }

  getMovies(mediaType,pageNumber): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${mediaType}?api_key=112ddfb027f773c77a2b3e7a15357e1f&language=en-US&page=${pageNumber}`)
  }

  getPeople(mediaType): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${mediaType}?api_key=112ddfb027f773c77a2b3e7a15357e1f&language=en-US`)
  }

  getTvShows(mediaType):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${mediaType}?api_key=112ddfb027f773c77a2b3e7a15357e1f&language=en-US&page=1`)
  }

}
