import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Quote } from '../../services/quote.service';

@Component({
  selector: 'app-quote-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCard {
  @Input() quote: Quote | null = null;
  @Input() onNewQuote: () => void = () => {};
  @Input() onShare: () => void = () => {};
  @Input() onSave: () => void = () => {};
}
