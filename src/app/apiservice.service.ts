import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '9cf5d76a29msh6b2f58569567334p1f99c4jsnb9eb3fea35c1',
    'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
  });
  constructor(public hc:HttpClient) { }

  getdata(){
    return this.hc.get(`https://the-cocktail-db3.p.rapidapi.com/`,{ headers: this.headers})
  }
}
