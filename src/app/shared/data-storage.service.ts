import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Owner } from "../owner/owner.model";
import { Pet } from "../pets/pet.model";
@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient) { }
    fetchOwners() {
        return this.http
            .get<Owner[]>(
                'http://localhost:8080/owners'
            )
    }

    storeOwner(owner: Owner) {
        return this.http.post<Owner>('http://localhost:8080/owner', owner);
    }

    fetchOwnerPets(id: number) {
        return this.http
            .get<Pet[]>(
                'http://localhost:8080/pet/owner/' + id
            );
    }

    storePet(pet: Pet, id: number) {
        return this.http.post<Pet>('http://localhost:8080/pet/' + id, pet);
    }

    putPet(pet: Pet) {
        return this.http.put('http://localhost:8080/pet/' + pet.id, pet);
    }

    removePet(id: number) {
        return this.http.delete('http://localhost:8080/pet/' + id);
    }
}