import { Component } from '@angular/core';
import { Forecast } from './forecast-details';
import { WeatherServiceService } from './weather-service.service';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ws:WeatherServiceService,public fb: FormBuilder) { }
  cityForrecastForm = this.fb.group({
    cityName: ''
  })

  title = 'Weather Forrecast';

  cities:string[]=['Toronto','Ottawa','Montreal','Calgray','Vancouver'];
  citySelected:string='' ;

  cityForecast:Forecast[]=[];
  ngOnInit(): void {
    
   this.citySelected='';
  this.getForrecast();
  }
  onSubmit() {
    // alert(JSON.stringify(this.oppoSuitsForm.value))
  }
  getForrecast(){
    // this.citySelected=this.cityForrecastForm.get('cityName')?.value;
    this.ws.getFutureForecast('Ottawa').subscribe((data)=>{ let temp=Object(data);

      for(let i=0;i<temp.data.length;i++){
        const tempData:Forecast={
          day :temp.data[i].datetime,
          temprature:temp.data[i].temp,
          icon:temp.data[i].weather.icon
        }
        this.cityForecast.push(tempData);
      }
    }
      
      );
  }
}
