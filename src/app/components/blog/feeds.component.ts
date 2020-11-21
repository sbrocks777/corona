import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css'],
})
export class FeedsComponent implements OnInit {
  form: FormGroup;

  str:string = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae iste deserunt quo, dicta
    recusandae officia facere dolor optio soluta obcaecati sit mollitia, ipsa facilis quia, quos error autem
    non pariatur?
    Sed quos sequi, in cum, aliquam architecto, accusantium quasi nihil incidunt asperiores itaque labore
    necessitatibus eligendi alias ducimus deleniti optio molestias aut magnam. Aliquid impedit sed
    architecto quisquam repellendus molestias.
    Quaerat nisi animi ex voluptate ipsam qui exercitationem dolor veniam quod magni quis quas non, iste
    maiores consequatur explicabo dolorum excepturi vitae quia, voluptates saepe? Pariatur natus explicabo
    accusamus excepturi!
  `;

  constructor(private fb: FormBuilder, public authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  get fc(): any {
    return this.form['controls'];
  }
}
