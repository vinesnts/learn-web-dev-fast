import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Musica } from './app.component';

const apiUrl = 'http://localhost:5000';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  http = inject(HttpClient);

  constructor() {}

  get() {
    return this.http.get<Musica[]>(`${apiUrl}/playlist`);
  }

  post(obj: Musica) {
    return this.http.post<{ success: string }>(`${apiUrl}/playlist`, obj);
  }
}
