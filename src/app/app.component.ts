import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //variable para poder mostrar en html
  weather;
  constructor(private weatherService: WeatherService) {}
  ngOnInit() {}

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode).subscribe(
      //respuesta
      (res) => {
        console.log(res);
        this.weather = res;
      },
      (err) => console.log(err)
    );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode) {
      //console.log(cityName.value, countryCode.value);
      this.getWeather(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Favor inserte algún valor');
    }
    cityName.focus();
    return false;
  }
}
