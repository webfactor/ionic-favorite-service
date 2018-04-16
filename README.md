# IonicFavoriteService
Adds functionality to store favorites on the users device by using ionic-storage

## Installation
- Install `@webfactor/ionic-favorite-service` via npm.
- Add `FavoriteServiceModule.forRoot()` to your Ionic module imports.

## Methods
``` typescript
    public getFavorites(): { id: number }[]
```
returns all stored favorites.
``` typescript
    public add(favorite: { id: number })
```
adds the object to the favorites.
``` typescript
    public remove(favorite: { id: number})
``` 
removes the object from the favorites.
``` typescript
    public toggle(favorite: { id: number})
```
remove the object if it's already in the favorites, else add it.
``` typescript
    public includes(favorite: { id: number})
```
checks if the object is already in the favorites.

## Example
``` typescript
export class HomePage {
    food: any = {id: 1, name: 'Pizza'};
    constructor(private favoriteService: FavoriteService) {}
}
```

``` html
<button padding ion-button icon-right (click)="favoriteService.toggle(food)">
    {{food.name}}
    <ion-icon [name]="favoriteService.includes(food) ? 'heart' : 'heart-outline'">
    </ion-icon>
</button>
```

![FavoriteButton1](https://github.com/webfactor/ionic-lib/blob/master/screenshots/favorite-service-1.png)
<br>
![FavoriteButton2](https://github.com/webfactor/ionic-lib/blob/master/screenshots/favorite-service-2.png)
