import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  loading: boolean = true;
  info: any = null;
  constructor(private s: ApiServiceService) { }

  ngOnInit(): void {
    this.s.getAll().subscribe(data => {
      this.loading = false;
      console.log(data);
      this.info = data;
    })
  }

}
