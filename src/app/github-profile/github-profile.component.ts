import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  apiUrl = 'https://api.github.com/users/cephaske254?access_token='+environment.accesss_token+'';
  items:any; repos:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe(data=>{
      this.items = data;
      this.http.get(data['repos_url']+'?access_token='+environment.accesss_token).subscribe(repos=>{
        this.repos = repos;
      })
    })
  }

}
