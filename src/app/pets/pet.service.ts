import { Subject } from "rxjs";
import { Pet } from "./pet.model";
import { PetStorageService } from "../shared/pet-storage.service";
import { Injectable, OnInit, ViewChild } from "@angular/core";
import { Owner } from "../owner/owner.model";
import { NgForm } from "@angular/forms";
@Injectable()
export class PetService implements OnInit {

    petsChanged = new Subject<Pet[]>();
    pets: Pet[] = [];
    owner: Owner;

    constructor(private petStorageService: PetStorageService) { }
    ngOnInit(): void {

    }
    // fetchOwnerPets() {
    //     this.petStorageService.fetchOwnerPets(this.owner.id).subscribe((pets: Pet[]) => {
    //         this.pets = pets;

    //     });
    // }
    setOwner(owner: Owner) {

        this.owner = owner
    }
    deletePet(index: number) {

        this.petStorageService.deletePet(this.pets[index].id).subscribe((response) => {
            //here got problem  
            this.pets.splice(index, 1);
            this.petsChanged.next(this.pets.slice());
        });
    }
    getOwner() {
        return this.owner;
    }
    getPets() {
        return this.pets.slice();

    }
    fetchOwnerPets() {

        this.petStorageService.fetchOwnerPets(this.owner.id).subscribe((pets: Pet[]) => {
            this.pets = pets;
            this.petsChanged.next(this.pets.slice());
        });

    }
    storePet(pet: Pet, id: number) {
        console.log(this.pets);
        this.petStorageService.storePet(pet, id).subscribe(() => {


        })
        this.pets.push(pet);
        this.petsChanged.next(this.pets.slice());
    }
    addOwner(pets: Pet) {
        this.pets.push(pets);
        this.petsChanged.next(this.pets.slice());
    }
}