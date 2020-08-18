import { Injectable } from '@angular/core';
//pedir peticiones atraves del metodo get,post
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey: string = '8398e9ff84849ce415d110e7edd02e21';
  URI: string = '';
  //instanciar clase
  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }
  //obtener clima -- nombre de ciudad y codigo de país
  getWeather(cityName: string, countryCode: string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }
}
