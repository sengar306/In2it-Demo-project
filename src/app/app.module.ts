import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/Header/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar/sidebar.component';
import { HomeComponent } from './Home/home/home.component';
import { IconsModule } from './icons/icons.module';
import { MytaskComponent } from './pages/mymenu/mytask/mytask.component';
import { DesignerComponent } from './pages/designer/designer.component';

import { MyteamworkComponent } from './pages/mymenu/myteamwork/myteamwork.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { ProductListModule } from './pages/product-list/product-list.module';
// import { TestDirectiveDirective } from './directive/test-directive.directive';








@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    MytaskComponent,
    DesignerComponent,
    MyteamworkComponent,
    // TestDirectiveDirective
   

    


    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AgGridModule,
    SharedModule,
    HttpClientModule, 
    ProductListModule 


  
  

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
