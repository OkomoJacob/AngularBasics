import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';

@NgModule({ //Decorator to convert plain TS into a Module
  declarations: [ // Add all components that are part of this module.
    AppComponent,
    CoursesComponent,
    // AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ // Register all dependices that all components in this module are dependent on here
    CoursesService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
