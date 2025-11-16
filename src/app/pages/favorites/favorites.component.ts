import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FavoritesService } from '../../services/favorites.service';
import { Quote } from '../../services/quote.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  items: Quote[] = [];

  constructor(private fav: FavoritesService, private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.items = this.fav.getFavorites();
  }

  remove(i: number) {
    this.fav.removeFavorite(i);
    this.refresh();
    this.snack.open('Видалено з улюблених', 'OK', { duration: 1500 });
  }

  clear() {
    this.fav.clear();
    this.refresh();
    this.snack.open('Список очищено', 'OK', { duration: 1500 });
  }
}
