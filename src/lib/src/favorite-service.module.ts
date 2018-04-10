import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from './providers/favorite-service';

@NgModule({
    imports: [CommonModule],
    declarations: [FavoriteServiceModule],
    exports: [FavoriteServiceModule]
})
export class FavoriteServiceModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FavoriteServiceModule,
            providers: [FavoriteServiceModule]
        };
    }
}
