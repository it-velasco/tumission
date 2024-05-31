import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachingComponent } from './coaching/coaching.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MissionComponent } from './mission/mission.component';
import { ParentsComponent } from './parents/parents.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectComponent } from './project/project.component';
import { ResolutionComponent } from './resolution/resolution.component';
import { ServicesComponent } from './services/services.component';
import { SuccessComponent } from './success/success.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'program', component: ServicesComponent },
  { path: 'medicine', component: MedicineComponent },
  { path: 'resolution', component: ResolutionComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'coaching', component: CoachingComponent },
  { path: 'presentation', component: PresentationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
