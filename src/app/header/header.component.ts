import { Component } from '@angular/core';

import { OwnerService } from '../owner/owner.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private ownerService: OwnerService) {
  }
}
