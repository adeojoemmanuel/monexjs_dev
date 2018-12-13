import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ApiService {

  constructor(public http:Http) { }
//function to get all databases 
  getdatabases(){
   let headers = new Headers
  return this.http.get('/api/databases').
   map(res=>res.json())
  }
  //get collections by posting db name 
  getcollections (details){
    let headers =new Headers
    headers.append('Content-Type','application/json')
    return this.http.post('/api/collection',details)
    .map(res=>res.json())
}
viewcollections (details){
  let headers =new Headers
  headers.append('Content-Type','application/json')
  return this.http.post('/api/viewcollection',details)
  .map(res=>res.json())
}
createDB(details){
  let headers =new Headers
  headers.append('Content-Type','application/json')
  return this.http.post('/api/addDB',details)
  .map(res=>res.json())
}
deleteDB(details){
  let headers =new Headers
  headers.append('Content-Type','application/json')
  return this.http.post('/api/dropDB',details)
  .map(res=>res.json())
}
}
