import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserProfile } from './github-profile.interfacets';
@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  access_token = '839d7a02aff2db8b392082d629e69784f55f1880';
  user = 'cephaske254';
  items: UserProfile;

  constructor(private http: HttpClient) { }
  fetchUserProfile() {
    let fetchUserPromise = new Promise((proceed, terminate) => {
      this.http.get<UserProfile>('https://api.github.com/users/' + this.user + '?access_token=' + this.access_token + '').toPromise().then(data => {
        this.items = data;
        this.http.get(this.items.repos_url + '?access_token=' + this.access_token + '').subscribe(repos => {
          this.items.repos = repos;
          console.log(this.items.repos)
        })
        proceed();
      },
        error => {
          terminate();
          this.items.login = '**Not Found!**';
          this.items.avatar_url = 'assets/images/profile.png';
        })
    })
    return fetchUserPromise;
  }
  ngOnInit() {
    this.fetchUserProfile();
  }

}
