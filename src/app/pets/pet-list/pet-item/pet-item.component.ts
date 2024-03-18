import { Component, Input } from '@angular/core';
import { Pet } from '../../pet.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../pet.service';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrl: './pet-item.component.css'
})
export class PetItemComponent {


  @Input() pet: Pet;
  @Input() index: number;
  constructor(private router: Router, private route: ActivatedRoute,private petService:PetService) {
  }

  onDelete() {
    this.petService.deletePet(this.index);
  }
  
  onEditPet(index: number) {
    this.router.navigate([index, 'edit'], { relativeTo: this.route });
  }
}
