import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSearchInterface } from './user-search.interface';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  searchKeywords:string;
  apiUrl = 'https://api.github.com/search/repositories?q=';
  items:[];
  constructor(private http:HttpClient) { }
  ngOnInit(): void {}

  searchUsers(){
    let searchPromise = new Promise((proceed,terminate)=>{
      this.http.get<UserSearchInterface>(this.apiUrl+this.searchKeywords).toPromise().then(data=>{
        //requested successfully
        proceed();
      },error=>{
        //terminate if failed
        terminate()
      })
    })
  }

}
