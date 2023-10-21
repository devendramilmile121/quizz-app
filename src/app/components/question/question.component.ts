import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  selectedAnswer: string = '';
  constructor(public qs: QuestionService) {}

  ngOnInit(): void {
    const answer = this.qs.answers[this.qs.currentIndex];
    if (answer) {
      this.selectedAnswer = answer;
    }
  }

  checkAnswer(option: string): void {
    this.selectedAnswer = option;
    this.qs.checkAnswer(option);
  }

  goToNext(): void {
    if (!this.qs.checkQuizzOver()) {
      this.qs.currentIndex++;
    }
  }

  goToPrevious(): void {
    if (this.qs.currentIndex > 0) {
      this.qs.currentIndex--;
    }
  }
}
