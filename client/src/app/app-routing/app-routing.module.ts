import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { NewComponent } from '../new/new.component';
import { DetailsComponent } from '../details/details.component';
import { EditComponent } from '../edit/edit.component';

const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        redirectTo: '/pets'
    },
    {
        path: 'pets',
        component: ListComponent,
    },
    {
        path: 'new',
        component: NewComponent
    },
    {
      path: 'pets/:_id',
      component: DetailsComponent
    },
    {
      path: 'pets/:_id/edit',
      component: EditComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
