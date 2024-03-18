import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from './owner.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent {

  owners: Owner[];
  private isChangedOwner: Subscription;
  isAdding = false;
  constructor(private router: Router, private route: ActivatedRoute,) {
  }
  addingOwner(event: Event) {
    this.isAdding = false;
  }
  addOwner() {
    this.isAdding = true;
    this.router.navigate(['add'], { relativeTo: this.route });
  }

}
