import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  public questions: Question[] = [
    {
      question: 'What is the largest mammal on Earth?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
      answer: 'Blue Whale',
    },
    {
      question:
        'Which gas do plants absorb from the atmosphere during photosynthesis?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      answer: 'Carbon Dioxide',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Go', 'Ag', 'Au', 'Ge'],
      answer: 'Au',
    },
    {
      question:
        "Which planet is known as the 'Morning Star' or 'Evening Star' due to its brightness?",
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      answer: 'Venus',
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Skin', 'Liver', 'Lungs'],
      answer: 'Skin',
    },
  ];

  public answers: { [key: number]: string } = {};

  public currentIndex: number = 0;

  getCurrentQuestion(): Question {
    return this.questions[this.currentIndex];
  }

  checkAnswer(answer: string): void {
    this.answers[this.currentIndex] = answer;
  }

  getScore(): number {
    let score: number = 0;
    this.questions.forEach((que: Question, index) => {
      if (this.answers[index] === que.answer) {
        score++;
      }
    });
    return score;
  }

  checkQuizzOver(): boolean {
    return this.currentIndex >= this.questions.length;
  }
}
