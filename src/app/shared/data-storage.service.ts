import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Owner } from "../owner/owner.model";
import { Pet } from "../pets/pet.model";

const LOCALHOST: string = 'http://localhost:8080';
@Injectable({ providedIn: 'root' })
export class DataStorageService {

    constructor(private http: HttpClient) { }
    fetchOwners() {
        return this.http
            .get<Owner[]>(
                LOCALHOST + '/owners'
            )
    }

    storeOwner(owner: Owner) {
        return this.http.post<Owner>(LOCALHOST+'/owner', owner);
    }

    fetchOwnerPets(id: number) {
        return this.http
            .get<Pet[]>(
                LOCALHOST+'/pet/owner/' + id
            );
    }

    storePet(pet: Pet, id: number) {
        return this.http.post<Pet>(LOCALHOST+'/pet/' + id, pet);
    }

    putPet(pet: Pet) {
        return this.http.put(LOCALHOST+'/pet/' + pet.id, pet);
    }

    removePet(id: number) {
        return this.http.delete( LOCALHOST+'/pet/' + id);
    }
}