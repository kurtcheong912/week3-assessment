import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { OwnerAddComponent } from './owner/owner-add/owner-add.component';
import { PetsComponent } from './pets/pets.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/owners', pathMatch: 'full' },
  {
    path: 'owners', component: OwnerComponent, children: [
      { path: 'add', component: OwnerAddComponent },
    ]},
  { path: 'pets', component: PetsComponent , children: [
    { path: ':data/edit', component: PetEditComponent },
    { path: 'add', component: PetAddComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
