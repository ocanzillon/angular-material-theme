import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ThemeModule } from './module/theme/theme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ThemeModule.forRoot({ theme: 'theme-blue-orange-dark-theme' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
