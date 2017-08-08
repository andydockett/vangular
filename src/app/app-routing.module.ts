import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { HomeOctComponent } from './home-oct/home-oct.component';

const routes: Routes = [
  {
    path: '',
    component: HomeOctComponent,
    pathMatch: 'full'
  },
   {
    path: ':slug',
    component: PostSingleComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class Wpng2RoutingModule { }