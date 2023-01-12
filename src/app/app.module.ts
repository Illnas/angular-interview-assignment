import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { LeftSideImageComponent } from './components/left-side-image/left-side-image.component';
import { LeftSideInfoComponent } from './components/left-side-info/left-side-info.component';
import { RightSideCartComponent } from './components/right-side-cart/right-side-cart.component';
import { RightSideSpecialRemarksComponent } from './components/right-side-special-remarks/right-side-special-remarks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    LeftSideComponent,
    RightSideComponent,
    LeftSideImageComponent,
    LeftSideInfoComponent,
    RightSideCartComponent,
    RightSideSpecialRemarksComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
