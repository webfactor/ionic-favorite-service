import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteService } from './providers/favorite-service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
    imports: [CommonModule, IonicStorageModule.forRoot()],
    declarations: [],
    exports: []
})
export class FavoriteServiceModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FavoriteServiceModule,
            providers: [FavoriteService]
        };
    }
}
