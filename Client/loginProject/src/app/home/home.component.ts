import {Component, OnInit} from '@angular/core';
import {UserHttpService} from "../user-http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  private user = {
    username: '',
    email: '',
    password: '',
    date: undefined
  }

  constructor(private us: UserHttpService) {
  }

  private createAndrea(){
    // object that will be passed to express in req.body, to create the mongoose user model
    return {
      username: 'BassHoundFromTs',
      email: 'basso@gmail.com',
      password: '12345678',
      date: new Date()
    }
  }
  signup() {
    this.us.register(this.createAndrea()).subscribe((d) =>{
      console.log('Registration Ok' + JSON.stringify(d));
    }, (err)=>{
      console.log('Registration error');
    })
  }

  ngOnInit(): void {
    this.signup();
    console.log('This is after Signup function');
  }
}
