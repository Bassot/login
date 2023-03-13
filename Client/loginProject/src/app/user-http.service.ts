import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
  public url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  private createOptions(params = {}){
    return {
      headers: new HttpHeaders({
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
      })
    };
  }

  register(user: any){
    return this.http.post(this.url + '/signup', user, this.createOptions());
  }

}
