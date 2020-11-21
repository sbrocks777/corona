import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <a routerLink="global">
        <i class="material-icons">language</i>
        <span>Global</span>
      </a>
      <a routerLink="contries">
        <i class="material-icons">flag</i>
        <span>Contries</span>
      </a>
      <a routerLink="about">
        <i class="material-icons">info</i>
        <span>About</span>
      </a>
      
      <a routerLink="feeds">
        <i class="material-icons">rss_feed</i>
        <span>Feeds</span>
      </a>
    </footer>
  `,
  styles: [
    `
      footer {
        background: var(--background-dark);
        border-top: 1px solid #333;
        color: var(--text-light-1);
        height: 60px;
        padding: 0em 3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      footer a { 
        color: var(--text-light-0);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }

      @media only screen and (max-width: 430px) {
        footer {
          padding: 0em 1em;
        }
      }
      
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
