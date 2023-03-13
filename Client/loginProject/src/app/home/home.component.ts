import { Component } from '@angular/core';
import {UserHttpService} from "../user-http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private us: UserHttpService) {
  }
}
