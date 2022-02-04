import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateinfraComponent } from './pages/createinfra/createinfra.component';
import { SearchrequestComponent } from './pages/searchrequest/searchrequest.component';
import { AboutComponent } from './pages/about/about.component';
import { FormsModule } from '@angular/forms';
import { EventComponent } from './pages/event/event.component';
import { CreatesuccessComponent } from './pages/createsuccess/createsuccess.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CreateinfraComponent,
    SearchrequestComponent,
    AboutComponent,
    EventComponent,
    CreatesuccessComponent,

  ],  
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
