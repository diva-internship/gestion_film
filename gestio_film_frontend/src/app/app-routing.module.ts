import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpellListComponent } from './components/spell-list/spell-list.component';
import { SpellDetailComponent } from './components/spell-detail/spell-detail.component';

const routes: Routes = [
  { path: 'spells', component: SpellListComponent },
  { path: 'spells/:name', component: SpellDetailComponent },
  { path: '', redirectTo: '/spells', pathMatch: 'full' },
  { path: '**', redirectTo: '/spells' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
