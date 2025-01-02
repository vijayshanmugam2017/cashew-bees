import { Routes } from '@angular/router';
import { KernalsComponent } from './kernals/kernals.component';
import { ShellComponent } from './shell/shell.component';
import { HuskComponent } from './husk/husk.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent }, 
    { path: 'kernals', component: KernalsComponent },
  { path: 'shell', component: ShellComponent },
  { path: 'husk', component: HuskComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
