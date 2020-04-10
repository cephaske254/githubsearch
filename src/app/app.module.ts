import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'search/repos', component: RepoSearchComponent},
  { path: 'search/users', component: UserSearchComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    RepoSearchComponent,
    UserSearchComponent,
    GithubProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
