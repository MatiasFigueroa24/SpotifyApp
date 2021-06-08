import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

   getQuery(query: string){
  const url= `https://api.spotify.com/v1/${query}`;
   
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQCf0Lgpep1EY_Q2uiMuOjdNxwPaP6PQ2qzA88dWQqw5BkWr5EMvV56TyAkB1rWGLAdIQQyatnkBUrXukcQ'
   }); 
  return this.http.get(url, {headers});
  }
   
  getNewReleases(){
   /* const headers = new HttpHeaders({
     'Authorization': 'Bearer BQDzxkyI_8UgWH2QAWOPCRV60lgCnWfAZWEfisPGDqCcXWWz_soztJ0YFndk1xgOBpPIpMyFrO3jYgmGeUs'
    }); */

  
   return this.getQuery('browse/new-releases')
   .pipe(map((data: any) =>{
    return data.albums.items; 
       }));
   
  }
  getArtista(termino: string){
    /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDzxkyI_8UgWH2QAWOPCRV60lgCnWfAZWEfisPGDqCcXWWz_soztJ0YFndk1xgOBpPIpMyFrO3jYgmGeUs'
     }); */

   return  this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map((data: any) =>{
      return data.artists.items; 
  }));
}
}
 


