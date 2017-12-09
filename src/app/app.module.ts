import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";
import { FooterComponent } from './footer/footer.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ClubInformationComponent } from './club-information/club-information.component';
import { EventsComponent } from './events/events.component';
import { ReserveCourtComponent } from './reserve-court/reserve-court.component';
import { LessonsComponent } from './lessons/lessons.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

const appRoutes: Routes = [
  { pathMatch: 'full', path: '', component: MarketingComponent },
  { pathMatch: 'full', path: 'club-information', component: ClubInformationComponent },
  { pathMatch: 'full', path: 'events', component: EventsComponent},
  { pathMatch: 'full', path: 'reserve-court', component: ReserveCourtComponent },
  { pathMatch: 'full', path: 'lessons', component: LessonsComponent },
  { pathMatch: 'full', path: 'sign-up', component: SignUpComponent },
  { pathMatch: 'full', path: 'log-in', component: LogInComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SmoothScrollToDirective,
    SmoothScrollDirective,
    FooterComponent,
    MarketingComponent,
    ClubInformationComponent,
    EventsComponent,
    ReserveCourtComponent,
    LessonsComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
