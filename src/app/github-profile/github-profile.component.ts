import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  access_token='839d7a02aff2db8b392082d629e69784f55f1880';
  apiUrl = 'https://api.github.com/users/cephaske254?access_token='+this.access_token+'';
  items:any; repos:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe(data=>{
      this.items = data;
      this.http.get(data['repos_url']+'?access_token='+this.access_token).subscribe(repos=>{
        this.repos = repos;
      })
    })
  }

}
