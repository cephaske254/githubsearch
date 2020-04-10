import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {
  searchKeywords:string;
  constructor(http:HttpClient) { }


  searchRepos(){

  }
  ngOnInit(): void {
  }

}
