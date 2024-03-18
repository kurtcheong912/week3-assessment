import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrl: './pet-edit.component.css'
})
export class PetEditComponent implements OnInit {

  pet: Pet;
  index: number;
  petForm: FormGroup
  constructor(private router: Router, private route: ActivatedRoute, private petService: PetService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['data'];
          this.pet = this.petService.getPet(this.index);
          if (this.pet) {
            this.petForm = new FormGroup({
              'name': new FormControl(this.pet.name, Validators.required),
              'breed': new FormControl(this.pet.breed, Validators.required),
            })
          }
        });
  }

  onDelete() {
    this.petService.deletePet(this.index);
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  onSubmit() {
    this.pet.name = this.petForm.value.name;
    this.pet.breed = this.petForm.value.breed;
    this.petService.updatePet(this.index, this.pet);
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
