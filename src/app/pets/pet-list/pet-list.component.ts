import { Component } from '@angular/core';
import { Pet } from '../pet.model';
import { Subscription } from 'rxjs';
import { PetService } from '../pet.service';
import { Owner } from '../../owner/owner.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css'
})
export class PetListComponent {
  pets: Pet[];
  owner: Owner;
  private isPetChanged: Subscription;
  constructor(private petService: PetService) {
  }

  ngOnInit(): void {
      this.petService.setPets();
      this.isPetChanged = this.petService.petsChanged.subscribe((pets: Pet[]) => {
        this.pets = pets;
      });
  }
}
