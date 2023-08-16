import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatakuliahComponent } from './layouts/matakuliah/matakuliah.component';
import { MainHeaderComponent } from './layouts/main-header/main-header.component';
import { MainSidebarComponent } from './layouts/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './layouts/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './layouts/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './layouts/main-footer/main-footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MatakuliahComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
