import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=london&appid=dad06be902d1de99349dd17477715105&units=metric'
    );
  }
}
