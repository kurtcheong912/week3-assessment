import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pet } from "../pets/pet.model";

@Injectable({ providedIn: 'root' })
export class PetStorageService {
    constructor(private http: HttpClient) {

    }
    fetchOwnerPets(id: number) {
      
        return this.http
            .get<Pet[]>(
                'http://localhost:8080/pet/owner/' + id
            );
    }
    storePet(pet: Pet, id: number) {
      
        return this.http.post('http://localhost:8080/pet/' + id, pet);

    }
    deletePet(id: number) {
      
        return this.http.delete('http://localhost:8080/pet/' + id);

    }
}