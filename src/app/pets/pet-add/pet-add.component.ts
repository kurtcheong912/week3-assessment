import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrl: './pet-add.component.css'
})
export class PetAddComponent implements OnInit {

  petForm: FormGroup;
  constructor(private petService: PetService) { }
  
  onAddPet() {
    const control = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'breed': new FormControl(null, Validators.required)
    });
    (<FormArray>this.petForm.get('pets')).push(control);
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let pet = new FormArray([]);
    this.petForm = new FormGroup({
      'pets': pet
    });
  }

  get controls() { // a getter!
    return (<FormArray>this.petForm.get('pets')).controls;
  }

  onDeletePet(index: number) {
    (<FormArray>this.petForm.get('pets')).removeAt(index);
  }

  onSubmit() {
    let tempPets = this.petForm.value.pets;
    let index = 0;
    (<FormArray>this.petForm.get('pets')).reset();
    this.petForm.reset;
    for (let pet of tempPets) {
      this.petService.addPet(pet);
      (<FormArray>this.petForm.get('pets')).removeAt(index);
      index++;
    }

  }
}
