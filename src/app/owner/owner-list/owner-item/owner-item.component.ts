import { Component, Input } from '@angular/core';
import { Owner } from '../../owner.model';
import { PetService } from '../../../pets/pet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-owner-item',
  templateUrl: './owner-item.component.html',
  styleUrl: './owner-item.component.css'
})
export class OwnerItemComponent {

  @Input() owner: Owner;
  @Input() index: number;
  constructor(private petService: PetService,private router: Router) {
  }

  onViewPets(index: number) {
    this.petService.setOwner(index);
    this.router.navigate(['pets']);
  }
}
