import { Injectable } from "@angular/core";
import { Owner } from "./owner.model";
import { Subject } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({
    providedIn: 'root'
})
export class OwnerService  {

    ownerChanged = new Subject<Owner[]>();
    private owners: Owner[];
    constructor(private dataStorageService: DataStorageService) { }
   
    setOwners() {
        this.dataStorageService.fetchOwners().subscribe(
            (owners: Owner[]) => {
                this.owners = owners;         
                this.ownerChanged.next(this.owners.slice());
            });

    }
    getOwners() {
        return this.owners.slice();
    }
    addOwner(owner: Owner) {
        this.dataStorageService.storeOwner(owner).subscribe(() => { });
        this.owners.push(owner);
        this.ownerChanged.next(this.owners.slice());
    }
    getOwner(index: number) {
        return this.owners[index];
    }
}