import { Component, Input, OnInit } from '@angular/core';
import { Owner } from '../owner.model';
import { Subscription } from 'rxjs';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrl: './owner-list.component.css'
})
export class OwnerListComponent implements OnInit {


  owners: Owner[];
  private isChangedOwner: Subscription;
  constructor(private ownerService: OwnerService) {
  }
  
  ngOnInit(): void {
    this.ownerService.setOwners();
    this.isChangedOwner = this.ownerService.ownerChanged.subscribe((owners: Owner[]) => {
      this.owners = owners;
    });
  }
}
