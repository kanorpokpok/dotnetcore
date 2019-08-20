import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  
  constructor(private http: HttpClient,@Inject('BASE_URL') private baseUrl: string) {}

  ngOnInit() {
    this.http.get<any>(`ws://${this.baseUrl}api/Stream`).subscribe(
      data => {
      console.log(data);
    }, error => console.error(error));
  }
  
}
