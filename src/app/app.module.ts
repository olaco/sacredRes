
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { MembersComponent } from './members/members.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


const appRoutes: Routes = [
  {path: ' ', component: HeaderComponent},
  {path: 'members', component: MembersComponent},
  {path: 'admin', component: AdminComponent},



];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MembersComponent,
    AdminComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
