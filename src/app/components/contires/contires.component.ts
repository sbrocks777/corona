import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-contires',
  templateUrl: './contires.component.html',
  styleUrls: ['./contires.component.css'],
})
export class ContiresComponent implements OnInit {
  countries: any = null;
  searchCountry: any;
  loading: boolean = true;

  constructor(private covidService: ApiServiceService) {
    this.covidService.getCountries().subscribe((data) => {
      this.loading = false;
      this.countries = data;
    });
  }
  ngOnInit(): void {}
}
