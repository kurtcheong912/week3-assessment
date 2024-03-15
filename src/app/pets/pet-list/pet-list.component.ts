import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent {

  @Input() pets: Pet[];
  constructor() {

  }
  
}
