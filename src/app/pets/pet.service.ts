import { Injectable } from "@angular/core";
import { Owner } from "../owner/owner.model";
import { Pet } from "./pet.model";
import { Subject } from "rxjs";
import { OwnerService } from "../owner/owner.service";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({
    providedIn: 'root'
})
export class PetService {
    petsChanged = new Subject<Pet[]>();
    pets: Pet[];
    owner: Owner;
    constructor(private ownerService: OwnerService, private dataStorageService: DataStorageService) { }
    
    setPets() {
        this.dataStorageService.fetchOwnerPets(this.owner.id).subscribe((pets: Pet[]) => {
            this.pets = pets;
            this.petsChanged.next(this.pets.slice());
        }, error => {
            this.pets = [];
        });
    }
    
    setOwner(index: number) {
        this.owner = this.ownerService.getOwner(index);
    }
    
    getOwner(){
        return this.owner;
    }
    
    getPets() {
        return this.pets.slice();
    }
   
    addPet(pet: Pet) {
        this.dataStorageService.storePet(pet, this.owner.id).subscribe((myPet: Pet) => {
            this.pets.push(myPet);
            this.petsChanged.next(this.pets.slice());
        });
    }
    
    getPet(index: number) {
        return this.pets[index]
    }
    
    updatePet(index: number, pet: Pet) {
        this.dataStorageService.putPet(this.pets[index]).subscribe(() => {
            const date = new Date();
            pet.dateModified = new Date().toLocaleDateString('sv');
            this.pets[index] = pet;
            this.petsChanged.next(this.pets.slice());
        });
    }
   
    deletePet(index: number) {
        this.dataStorageService.removePet(this.pets[index].id).subscribe(() => {
            this.pets.splice(index, 1);
            this.petsChanged.next(this.pets.slice());
        });
    }
}