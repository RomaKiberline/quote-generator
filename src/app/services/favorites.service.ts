import { Injectable } from '@angular/core';
import { Quote } from './quote.service';

const STORAGE_KEY = 'favorites_quotes_v1';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  getFavorites(): Quote[] {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Quote[] : [];
  }

  addFavorite(q: Quote): void {
    const list = this.getFavorites();
    if (!list.some(x => x.text === q.text && x.author === q.author)) {
      list.unshift(q);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
  }

  removeFavorite(index: number): void {
    const list = this.getFavorites();
    list.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}
