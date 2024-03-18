import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from './pet.service';
import { Owner } from '../owner/owner.model';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent implements OnInit {
  owner: Owner;
  constructor(private router: Router, private route: ActivatedRoute, private petService: PetService) {
  }
  
  ngOnInit(): void {
    this.owner = this.petService.getOwner();
  }

  addPet() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}
