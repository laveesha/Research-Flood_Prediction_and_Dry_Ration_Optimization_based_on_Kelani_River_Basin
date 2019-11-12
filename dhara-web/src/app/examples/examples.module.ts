import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { VictimcountComponent } from './victimcount/victimcount.component';
import { ReliefComponent } from './relief/relief.component';
import { SiginComponent } from './sigin/sigin.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        VictimcountComponent,
        ReliefComponent,
        SiginComponent
    ]
})
export class ExamplesModule { }
