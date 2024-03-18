import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrl: './owner-add.component.css'
})
export class OwnerAddComponent {
  @ViewChild('ownerForm', { static: false }) ownerForm: NgForm;
  @Output() adding = new EventEmitter<boolean>();
  constructor(private router: Router, private route: ActivatedRoute, private ownerService: OwnerService) {

  }
  onSubmit() {
    this.ownerService.addOwner(this.ownerForm.value);
    this.ownerForm.reset();
    this.adding.emit(true);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
