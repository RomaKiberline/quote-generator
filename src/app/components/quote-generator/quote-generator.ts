import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { QuoteCard } from '../quote-card/quote-card';
import { Quote, QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-quote-generator',
  standalone: true,
  imports: [
    CommonModule, 
    QuoteCard, 
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.scss']
})
export class QuoteGenerator implements OnInit {
  currentQuote: Quote | null = null;
  isLoading = true;

  constructor(
    private quoteService: QuoteService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getNewQuote();
  }

  getNewQuote() {
    this.isLoading = true;
  
    setTimeout(() => {
      this.currentQuote = this.quoteService.getRandomQuote();
      this.isLoading = false;
    }, 500);
  }

  shareQuote() {
    if (!this.currentQuote) return;
    
    const text = `"${this.currentQuote.text}" - ${this.currentQuote.author}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Inspirational Quote',
        text: text,
        url: window.location.href
      }).catch(err => {
        this.copyToClipboard(text);
      });
    } else {
      this.copyToClipboard(text);
    }
  }
  
  private copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.snackBar.open('Цитату скопійовано!', 'Закрити', {
        duration: 3000
      });
    });
  }
}
