import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ituneservice } from '../shared/itune-service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(public ituneservice: Ituneservice) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    this.ituneservice.searchMusic(form.value.search);
    //console.log(form.value.search);
  }
}
