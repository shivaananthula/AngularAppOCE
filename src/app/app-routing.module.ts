import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CreateinfraComponent } from './pages/createinfra/createinfra.component';
import { CreatesuccessComponent } from './pages/createsuccess/createsuccess.component';
import { EventComponent } from './pages/event/event.component';
import { SearchrequestComponent } from './pages/searchrequest/searchrequest.component';

const routes: Routes = [{ path:'', redirectTo: '/createinfra', pathMatch:'full'},
{ path: 'createinfra', component: CreateinfraComponent},
{ path: 'searchrequest', component: SearchrequestComponent},
{ path: 'about', component: AboutComponent},
{ path: 'events', component: EventComponent},
{ path: 'createsuccess', component: CreatesuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
