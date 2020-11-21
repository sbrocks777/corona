import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css'],
})
export class FeedsComponent implements OnInit {
  form: FormGroup;
  loading: boolean = true;
  feeds: any;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private api: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.api.getAllFeeds().subscribe((feeds) => {
      this.loading = false;
      this.feeds = feeds;
    });
  }

  delete(id: string) {
    this.api.deleteFeed(id);
  }
}
