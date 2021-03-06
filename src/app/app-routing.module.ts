import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingComponent } from './parking';
import { HomeComponent } from './home';


const routes: Routes = [
    {path: '', redirectTo:'home',pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'parking', component: ParkingComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers:[]
})
export class RoutingApp { }