import { HttpClient } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../app-config/app-config.module';
import { Music } from './Music';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable()
export class Ituneservice {
  public query: string | undefined;
  public music: Music[] | undefined;
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {}

  public searchMusic(queryTitle: string) {
    this.query = queryTitle;

    this.http
      .get(`${this.config.apiEndPoint}search?term=${this.query}`)
      .pipe(
        map((data) => {
          const res: any = data;
          console.log(res.results);
          return res.results ? res.results : [];
        })
      )
      .subscribe((music) => (this.music = music));
  }
  public more_info(musicId: string) {
    return this.http.get(`${this.config.apiEndPoint}lookup?id=${musicId}`);
  }
  public bookFactory(item: any): Music {
    return new Music(
      item.artistName,
      item.artistViewUrl,
      item.artwork30,
      item.artworkUrl60,
      item.artworkUrl100,
      item.trackId,
      item.trackName
    );
  }
}
