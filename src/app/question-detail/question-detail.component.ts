import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input()
  question;

  response: string;

  constructor() { }

  ngOnInit() {
  }

}
