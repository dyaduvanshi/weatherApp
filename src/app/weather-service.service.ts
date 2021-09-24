import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http:HttpClient) { }

  getFutureForecast(city:string){
   return  this.http.get( `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=371d4e84f04f4e6eafe38174f3de11e5&days=5`);
  // return this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f&q=${city}`);
  }


}
