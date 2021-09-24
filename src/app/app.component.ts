import { Component } from '@angular/core';
import { Forecast } from './forecast-details';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ws:WeatherServiceService) { }
  

  title = 'Weather Forrecast';

  cities:string[]=['Toronto','Ottawa','Montreal','Calgray','Vancouver'];

  cityForecast:Forecast[]=[];
  ngOnInit(): void {
    
   
  }

  
  
  getForrecast(city:string){
    console.log(city);
    this.ws.getFutureForecast(city).subscribe((data:any)=>{
      
      let weatherDat=data.data;
     
      this.cityForecast=weatherDat.map((iteam:any)=>{
       return  {
          day:iteam.datetime,
          temprature: iteam.temp,
          icon:iteam.weather.icon

        }
      });
  });}
}
