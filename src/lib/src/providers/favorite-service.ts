import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Favorite } from '../model/favorite';

@Injectable()
export class FavoriteService {
    private favorites: Favorite[] = [];

    constructor(public storage: Storage) {
        this.getFavoritesFromStorage();
    }

    private getFavoritesFromStorage() {
        this.storage
            .get('favorites')
            .then(value => (value ? (this.favorites = value) : (this.favorites = [])))
            .catch(() => (this.favorites = []));
    }

    public getFavorites(): Favorite[] {
        return this.favorites;
    }

    public add(favorite: Favorite) {
        if (this.includes(favorite)) {
            return;
        }
        this.favorites.push(favorite);
        this.persist();
    }

    public remove(favorite: Favorite) {
        this.favorites = this.favorites.filter(fav => fav.id !== favorite.id);
        this.persist();
    }

    public toggle(favorite: Favorite) {
        if (this.includes(favorite)) {
            this.remove(favorite);
        } else {
            this.add(favorite);
        }
        this.persist();
    }

    public includes(favorite: Favorite) {
        return this.favorites.map(fav => fav.id).indexOf(favorite.id) >= 0;
    }

    private persist() {
        this.storage.set('favorites', this.favorites);
    }
}
