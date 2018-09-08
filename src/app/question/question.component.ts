import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Question[] = []; 

  constructor( private questionsService: QuestionsService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionsService.getQuestions()
      .subscribe(questions => {
          this.questions = questions
          })
  }

}
