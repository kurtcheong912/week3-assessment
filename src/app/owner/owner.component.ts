import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Owner } from './owner.model';
import { OwnerService } from './owner.service';
import { OwnerStorageService } from '../shared/owner-storage.service';
import { PetService } from '../pets/pet.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent implements OnInit {
  @ViewChild('ownerForm') ownerForm: NgForm
  newOwner: Owner;

  constructor(private ownerService: OwnerService, private ownerStorageService: OwnerStorageService, private petService: PetService) { }
  ngOnInit(): void {
    this.ownerStorageService.fetchOwners().subscribe(
      (owners: Owner[]) => {
        this.ownerService.setOwners(owners);
      }
    );
  }
  onSubmit() {
    let addedOwnerId: number;
    this.newOwner = new Owner(this.ownerForm.value.firstName, this.ownerForm.value.lastName);
    this.ownerService.addOwner(this.newOwner);
    this.ownerForm.reset();


  }

}
