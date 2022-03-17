import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AnimesModule } from './components/animes/animes.module';
import { MatematicaModule } from './components/matematica/matematica.module';
import { PkmnModule } from './components/pkmn/pkmn.module';
import { SuperHeroesModule } from './components/superHeroes/superHeroes.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatematicaModule,
    SuperHeroesModule,
    AnimesModule,
    PkmnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
