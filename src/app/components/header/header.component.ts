import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: any;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(u => console.log(u))
  }
}
