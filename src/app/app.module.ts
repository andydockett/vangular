import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { Wpng2RoutingModule } from './app-routing.module';


import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { NavComponent } from './nav/nav.component';
import { CoverComponent } from './cover/cover.component';
import { HomeOctComponent } from './home-oct/home-oct.component';

import { ApostListComponent } from './aposts/apost-list/apost-list.component';
import { BpostListComponent } from './bposts/bpost-list/bpost-list.component';
import { CpostListComponent } from './cposts/cpost-list/cpost-list.component';
import { DpostListComponent } from './dposts/dpost-list/dpost-list.component';
import { EpostListComponent } from './eposts/epost-list/epost-list.component';
import { FpostListComponent } from './fposts/fpost-list/fpost-list.component';
import { GpostListComponent } from './gposts/gpost-list/gpost-list.component';
import { HpostListComponent } from './hposts/hpost-list/hpost-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    
    PostSingleComponent,
    NavComponent,
    CoverComponent,
    HomeOctComponent,

    ApostListComponent,
    BpostListComponent,
    CpostListComponent,
    DpostListComponent,
    EpostListComponent,
    FpostListComponent,
    GpostListComponent,
    HpostListComponent
  
  ],
  imports: [  
  	BrowserModule,
  	HttpModule,
    Wpng2RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
