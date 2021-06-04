import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import{PeopleDetailsComponent} from './people-details/people-details.component'
import { TvDetailsComponent } from './tv-details/tv-details.component';

const routes: Routes = [
  {path:'' , redirectTo:'register' , pathMatch:'full'},
  {path:'home'  ,  canActivate:[AuthGuard]  ,component:HomeComponent},
  {path:'movies' ,  canActivate:[AuthGuard]   , component:MoviesComponent},
  {path:'about' ,  canActivate:[AuthGuard]  , component:AboutComponent},
  {path:'tv' ,  canActivate:[AuthGuard]  , component:TvComponent},
  {path:'register'  , component:RegisterComponent},
  {path:'login'  , component:LoginComponent},
  {path:'People',  canActivate:[AuthGuard]   , component:PeopleComponent},
  { path: 'movieDetails/:type/:id', canActivate: [AuthGuard], component: MoviesDetailsComponent },
  {path:'tvDetails/:type/:id',canActivate:[AuthGuard],component:TvDetailsComponent},
  { path: 'peopleDetails/:id', canActivate: [AuthGuard], component:PeopleDetailsComponent },
  

  {path:'**' , component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
