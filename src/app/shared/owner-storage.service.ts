import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OwnerService } from "../owner/owner.service";
import { Owner } from "../owner/owner.model";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class OwnerStorageService {
  constructor(private http: HttpClient) {

  }
  fetchOwners() {
    return this.http
      .get(
        'http://localhost:8080/owners'
      );

  }
  storeOwner(owner: Owner) {
   
  
    return this.http.post<Owner>('http://localhost:8080/owner', owner);

  }


}