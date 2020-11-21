import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.css'],
})
export class NewFeedComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private api: ApiServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  get fc(): any {
    return this.form['controls'];
  }

  async onSubmit() {
    this.loading = true;
    let data = this.form.value;
    try {
      await this.api.createFeed(data).then(() => {
        this.router.navigate(['feeds']);
      });
    } catch (err) {
      console.log(err);
    }
  }
}
