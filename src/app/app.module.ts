import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { MainPage } from './modules/main-page/main.page';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent,
    MainPage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
