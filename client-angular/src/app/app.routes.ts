import { Routes } from '@angular/router';
import { AreaListComponent as module1 } from './module1/components/area-list/area-list.component';
import { AreaListComponent as module2 } from './module2/components/area-list/area-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'module1', pathMatch: 'full' },
    { path: 'module1', component: module1 },
    { path: 'module2', component: module2 },
];
