import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatakuliahComponent } from './layouts/matakuliah/matakuliah.component';

const routes: Routes = [
  {path: 'matakuliah', component: MatakuliahComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
