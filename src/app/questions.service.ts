import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Question } from './question';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
}) 
export class QuestionsService {

  constructor(
    private http: HttpClient
  ) { }

  private questionUrl = 'https://practiceapi.devmountain.com/api/trivia/questions/'

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionUrl)
  }

}
