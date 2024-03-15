import { Component, OnInit } from '@angular/core';
import { OwnerStorageService } from '../shared/owner-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
constructor(private ownerStorageService: OwnerStorageService){

}
ngOnInit(): void {
    // this.ownerStorageService.fetchOwners();
}
}
