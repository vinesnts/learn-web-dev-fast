import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

export type Musica = { musica: string; artista: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-atividade1';

  musica: string = '';
  artista: string = '';

  playlist: Musica[] = [];

  status: string = '';

  constructor(private appService: AppService) {}
  listarPlaylist() {
    this.appService.get().subscribe({
      next: (res) => {
        this.playlist = res;
      },
    });
  }

  addMusica() {
    this.appService
      .post({
        musica: this.musica,
        artista: this.artista,
      })
      .subscribe({
        next: (res: { success: string }) => {
          if (res && res.success) {
            this.status = res.success;
            setTimeout(() => {
              this.status = '';
            }, 3000);
          }
        },
      });
  }
}
