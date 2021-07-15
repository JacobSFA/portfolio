import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ThreeDCSSOnlyComponent } from './components/three-dcssonly/three-dcssonly.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "css-only",
    component: ThreeDCSSOnlyComponent
  },
  {
    path: "**",
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
