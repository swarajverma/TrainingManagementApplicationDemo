import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public oauthService:OAuthService) { }

  ngOnInit() {
  }
  get getName(){
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
     /* console.log("Logged In - "+claims['name']);  */
    return claims['name'];
  }
}
