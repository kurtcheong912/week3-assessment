import { Component, Input } from '@angular/core';
import { Pet } from '../../pet.model';
import { PetService } from '../../pet.service';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrl: './pet-item.component.css'
})
export class PetItemComponent {
  @Input() pet: Pet;
  @Input() index: number;
  constructor(private petService:PetService){

  }
  onDeletePet(index:number) {
    console.log('what is this' +index);
    this.petService.deletePet(index);
  }
}
