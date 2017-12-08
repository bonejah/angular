<<<<<<< HEAD

=======
//import { ptbrLocale } from './pt-br-locale';
import { FormsModule } from '@angular/forms';
>>>>>>> 352f0231bca11c0db0e37ff0e24595509647438b
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings/settings.service';
=======
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
>>>>>>> 352f0231bca11c0db0e37ff0e24595509647438b

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingService) => settingService.getLocale(),
    }
=======
    ExemploPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
    SettingsService, 
    /*{
      provide: LOCALE_ID,
      deps: [SettingsService]
      
      //useFactory: ptbrLocale
    }*/
>>>>>>> 352f0231bca11c0db0e37ff0e24595509647438b
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
