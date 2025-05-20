import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '8bc6785024msheecc8540adc975dp1e847ejsna48afde9f3e4',
    'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
  });
  constructor(public hc:HttpClient) { }

  getdata(){
    return this.hc.get(`https://the-cocktail-db3.p.rapidapi.com/`,{ headers: this.headers})
  }
}
