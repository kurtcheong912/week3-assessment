import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PetsComponent } from "./pets/pets.component";
import { OwnerComponent } from "./owner/owner.component";


const appRoutes: Routes = [
     { path: '', component: OwnerComponent },
     { path: 'pets', component: PetsComponent },
     { path: 'owners', component: OwnerComponent },
    // // { path: 'not-found', component: PageNotFoundComponent },
    // { path: 'not-found', component: ErrorPageComponent , data:{message: 'page not found!!!'}},
    // { path: '**', redirectTo: '/not-found' }
];
@NgModule({
    // imports: [RouterModule.forRoot(appRoutes,{useHash:true})],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {


}