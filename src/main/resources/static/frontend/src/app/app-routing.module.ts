import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploaderComponent } from './uploader/uploader.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: UploaderComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
