import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LibrairieComponent } from './librairie/librairie.component';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicComponent } from './music/music.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'librairie', component: LibrairieComponent },
  { path: 'music/musicId', component: MusicComponent },
  { path: 'music-list', component: MusicListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'header', component: HeaderComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
