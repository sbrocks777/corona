import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="title">{{ title }}</div>
    </header>
  `,
  styles: [
    `
    header {
      display: flex;
      align-items: center;
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
  `,
  ],
})
export class HeaderComponent implements OnInit {

  @Input() title: any;
  constructor() {}

  ngOnInit(): void {}
}
