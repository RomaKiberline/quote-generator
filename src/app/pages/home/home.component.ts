import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteGenerator } from '../../components/quote-generator/quote-generator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, QuoteGenerator],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
