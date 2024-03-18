import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Angular meterial imports
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; 
import { MatToolbarModule } from '@angular/material/toolbar';
/////
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PetsComponent } from './pets/pets.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';
import { OwnerAddComponent } from './owner/owner-add/owner-add.component';
import { HeaderComponent } from './header/header.component';
import { PetItemComponent } from './pets/pet-list/pet-item/pet-item.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { OwnerItemComponent } from './owner/owner-list/owner-item/owner-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import { HttpClientModule } from '@angular/common/http';
import { OwnerService } from './owner/owner.service';


@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetListComponent,
    OwnerComponent,
    OwnerListComponent,
    OwnerAddComponent,
    HeaderComponent,
    PetItemComponent,
    PetEditComponent,
    OwnerItemComponent,
    PetAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatToolbarModule,
  ],
  providers: [
    provideAnimationsAsync(),OwnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
