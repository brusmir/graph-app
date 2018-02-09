import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { GraphicComponent } from './graphic/graphic.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'graphic', component: GraphicComponent },
	{ path: 'graphic/:id', component: GraphicComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
	imports: [
  	RouterModule.forRoot(appRoutes)
  ],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }