import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RepoSearchInterface } from './repo-search.interface'
import $ from 'jquery';
@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  searchKeywords: string;
  searchInterface: RepoSearchInterface;
  apiUrl = 'https://api.github.com/search/repositories?q=';
  constructor(private http: HttpClient, ) { }

  ngOnInit(): void { }
  items: []; total_count:number;
  searchRepos() {
    let searchPromise = new Promise((proceed, terminate) => {
      this.http.get<RepoSearchInterface>(this.apiUrl + this.searchKeywords).toPromise().then(data => {
        this.items = data['items'];
        this.total_count = data['total_count'];
        proceed();
      },error=>{
        //terminate if failed
        terminate();
      })
    });
    searchPromise;
  }
}
$(document).ready(function(){
  $("input[type=text][name=searchKeywords]").focus();
});