import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { FontSizeDirective } from './font-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DirectiveExampleComponent,
    FontSizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
