import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { PetsComponent } from './pets/pets.component';
import {MatSelectModule} from '@angular/material/select';
import { OwnerComponent } from './owner/owner.component';
import { HttpClientModule } from '@angular/common/http';
import { OwnerService } from './owner/owner.service';
import { PetService } from './pets/pet.service';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetItemComponent } from './pets/pet-list/pet-item/pet-item.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },


  // // { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent , data:{message: 'page not found!!!'}},
  // { path: '**', redirectTo: '/not-found' }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PetsComponent,
    OwnerComponent,
    PetListComponent,
    PetItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(), OwnerService,PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
