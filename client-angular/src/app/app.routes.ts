import { Routes } from '@angular/router';
import { AreaListComponent } from './module1/components/area-list/area-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'module1', pathMatch: 'full' },
    { path: 'module1', component: AreaListComponent },
];
