import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input()
  question: Question;
  difficulty = {
    1: "easy",
    2: "medium",
    3: "hard",
  }

  response: string;

  constructor() { }

  ngOnInit() {
  }

}
