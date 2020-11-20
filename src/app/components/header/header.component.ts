import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="title">{{ title }}</div>
        <div>
          <div class="profile" *ngIf="(authService.user$ | async) as user">
            <img class="img" *ngIf="user.photoURL" [src]="user.photoURL">
            <div class="img" *ngIf="user.photoURL">{{ user.displayName[0] }}</div>
            <div class="img" *ngIf="!(user.photoURL || user.displayName) ">{{ user.email[0] }}</div>
          </div>
        </div>
    </header>
  `,
  styles: [
    `
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      padding: 0px 1em;
      font-weight: 600;
      font-size: 1.5em;
      color: var(--text-light-0);
      background: var(--background-dark);
      -webkit-box-shadow: 0 8px 6px -6px black;
      -moz-box-shadow: 0 8px 6px -6px black;
      box-shadow: 0 8px 6px -6px black;
      border-bottom: 1px solid #333;
    }

    .img{
      height: 38px;
      width: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #333;
      text-transform: uppercase;
      font-weight: 900;
      background: aquamarine;
      border-radius: 50%;
    }
  `,
  ],
})
export class HeaderComponent implements OnInit {

  @Input() title: any;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(u => console.log(u))
  }
}
