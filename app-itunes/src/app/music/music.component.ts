import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ituneservice } from '../shared/itune-service';
import { Music } from '../shared/Music';
import { Params } from '@angular/router';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent implements OnInit {
  music: Music | undefined;
  constructor(
    private route: ActivatedRoute,
    public itunesmusicservice: Ituneservice
  ) {
    this.route.params.subscribe((params) => {
      if (params['musicId']) {
        console.log(params['musicId']);
        this.getMusic(params['musicId']);
      }
    });
  }

  getMusic(musicId: string) {
    this.itunesmusicservice
      .more_info(musicId)
      .subscribe((music) => console.log(music));
  }

  ngOnInit() {}
}
