import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MissionComponent } from './mission/mission.component';
import { HomeComponent } from './home/home.component';
import { VisionComponent } from './vision/vision.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ResolutionComponent } from './resolution/resolution.component';
import { ParentsComponent } from './parents/parents.component';
import { ProjectComponent } from './project/project.component';
import { SuccessComponent } from './success/success.component';
import { CoachingComponent } from './coaching/coaching.component';
import { PresentationComponent } from './presentation/presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MissionComponent,
    HomeComponent,
    VisionComponent,
    ContactComponent,
    FooterComponent,
    ServicesComponent,
    HomeHeaderComponent,
    MedicineComponent,
    ResolutionComponent,
    ParentsComponent,
    ProjectComponent,
    SuccessComponent,
    CoachingComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
