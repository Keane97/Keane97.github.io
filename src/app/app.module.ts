import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import { ProjectsRowComponent } from './projects-row/projects-row.component';
import { LinkdinCertsComponent } from './linkdin-certs/linkdin-certs.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PersonalProfileComponent,
    ProjectsRowComponent,
    LinkdinCertsComponent,
    ExperienceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
