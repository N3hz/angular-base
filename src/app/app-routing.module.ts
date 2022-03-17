import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/animes/main-page/main-page.component';
import { InfoComponent } from './components/info/info.component';
import { ContadorComponent } from './components/matematica/contador/contador.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPkmnComponent } from './components/pkmn/main-pkmn/main-pkmn.component';
import { HeroeComponent } from './components/superHeroes/heroe/heroe.component';
import { ListaHeroesComponent } from './components/superHeroes/lista-heroes/lista-heroes.component';


const routes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: '', component: NavbarComponent, 
    children: [
      {
        path: 'pkmn',
        component: MainPkmnComponent,
      },
      {
        path: 'contador',
        component: ContadorComponent,
      },
      {
        path: 'heroes',
        component: HeroeComponent,
      },
      {
        path: 'lista-heroes',
        component: ListaHeroesComponent,
      },
      {
        path: 'main',
        component: MainPageComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
