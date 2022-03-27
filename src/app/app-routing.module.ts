import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/testpage', pathMatch: 'full' },
  {
    path: 'testpage',
    component: TestPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
