import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      this.http.get<>(this.apiUrl+this.searchKeywords).toPromise().then(data=>{
        
      })
    })
  }

}
