import { Subject } from "rxjs";
import { Owner } from "./owner.model";
import { OwnerStorageService } from "../shared/owner-storage.service";
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class OwnerService {
    ownerChanged = new Subject<Owner[]>();
    private owners: Owner[] = [];

    constructor(private ownerStorageService: OwnerStorageService) {

    }


    setOwners(owners: Owner[]) {

        this.owners = owners;
    }
    getOwners() {

        return this.owners.slice();
    }
    addOwner(owner: Owner) {
 
      
       this.ownerStorageService.storeOwner(owner).subscribe(response => {
        // this.petService.setOwner(response);
          this.owners.push(response);
        this.ownerChanged.next(this.owners.slice());
      
      });
       
      
    }
}