import { Component, OnInit, ViewChild } from '@angular/core';
import { Owner } from '../owner/owner.model';
import { OwnerService } from '../owner/owner.service';
import { Subscription } from 'rxjs';
import { OwnerStorageService } from '../shared/owner-storage.service';
import { Pet } from './pet.model';
import { PetStorageService } from '../shared/pet-storage.service';
import { PetService } from './pet.service';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent implements OnInit {
  owners: Owner[];
  pets: Pet[] = [];
  selectedOwner: Owner;
  newPet: Pet;
  petForm: FormGroup;
  private isChangedOwner: Subscription;
  private isChangedPets: Subscription;
  constructor(private ownerService: OwnerService, private petService: PetService, private petStorageService: PetStorageService) { }
  ngOnInit(): void {
    // 
    // console.log(this.owners);
    //this.ownerStorageService.fetchOwners();
    this.isChangedOwner = this.ownerService.ownerChanged.subscribe((owners: Owner[]) => {
      this.owners = owners;
    });

    this.owners = this.ownerService.getOwners();

    this.isChangedPets = this.petService.petsChanged.subscribe((pets: Pet[]) => {
      this.pets = pets;
    })
    let pet = new FormArray([]);
  }
  onVewPet(index: number) {
    this.selectedOwner = this.owners[index];
    // console.log("Yes u have clicked me!!!");
    // this.petService.setOwner(owner);
    // this.petService.fetchOwnerPets();
    this.petStorageService.fetchOwnerPets(this.selectedOwner.id).subscribe((pets: Pet[]) => {
      this.pets = pets;
      this.petService.pets = pets;
      this.selectedOwner = this.selectedOwner;
      this.initForm();

    })

  }
  // onVewPet(owner: Owner) {
  //   console.log("Yes u have clicked me!!!");

  //   this.petStorageService.fetchOwnerPets(owner.id).subscribe((pets: Pet[]) => {
  //     this.pets = pets;
  //     this.selectedOwner = owner;
  //   });

  // }
  private initForm() {
    let pet = new FormArray([]);
    // if (this.pets.length > 0) {
    //   for (let myPet of this.pets) {
    //     pet.push(
    //       new FormGroup({
    //         'name': new FormControl(myPet.name, Validators.required),
    //         'breed': new FormControl(myPet.breed, Validators.required),
    //       })
    //     );
    //   }
    // }
    this.petForm = new FormGroup({
      'pets': pet
    });
  }
  onAddPet() {
    const control = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'breed': new FormControl(null, Validators.required)
    });
    (<FormArray>this.petForm.get('pets')).push(control);
  }

  get controls() { // a getter!
    return (<FormArray>this.petForm.get('pets')).controls;
  }
  onDeletePet(index: number) {

    (<FormArray>this.petForm.get('pets')).removeAt(index);


  }
  onSubmit() {
    console.log("u have submitted me");

    let tempPets = this.petForm.value.pets;
    let index = 0;
    (<FormArray>this.petForm.get('pets')).reset();
    this.petForm.reset;
    for (let pet of tempPets) {
      (<FormArray>this.petForm.get('pets')).removeAt(index);

      index++;
      console.log(pet);
      this.petService.storePet(pet, this.selectedOwner.id);
    }

  }

}
