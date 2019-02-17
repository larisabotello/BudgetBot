import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomingComponent } from './incoming/incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';
import { BudgetComponent } from './budget/budget.component';

const routes: Routes = [
  { path: '', redirectTo: 'incoming', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'incoming', component: IncomingComponent},
  { path: 'outgoing', component: OutgoingComponent},
  { path: 'budget', component: BudgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
