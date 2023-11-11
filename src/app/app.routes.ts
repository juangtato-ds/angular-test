import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home"
  },
  {
    path: "home",
    pathMatch: "full",
    loadComponent: () => import('./page/home-page/home-page.component').then(c => c.HomePageComponent)
  },
  {
    path: "**",
    loadComponent: () => import('./page/not-found-page/not-found-page.component').then(c => c.NotFoundPageComponent)
  }
];
