import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConceptsListComponent } from './concepts-list/concepts-list.component';
import { ConceptListComponent } from './concepts-list/concept-list.component';
import { ConceptComponent } from './concepts-list/concept/concept.component';
import { ContainerComponent } from './container/container.component';
import { BuildContainerComponent } from './build-container/build-container.component';
import { ControlersComponent } from './build-container/controlers/controlers.component';
import { NavComponent } from './nav/nav.component';

import { ConfigService } from './shared/config.service';
import { LoaderService } from './shared/loader.service';
import { SafePipe } from './shared/safe.pipe';
import { routing } from './app.routing';

import * as $ from 'jquery';
import { FooterComponent } from './footer/footer.component';
export function useFactory(service: ConfigService) { return () => service.load(); }

@NgModule({
  declarations: [
    AppComponent,
    ConceptsListComponent,
    ConceptListComponent,
    ConceptComponent,
    ContainerComponent,
    BuildContainerComponent,
    ControlersComponent,
    NavComponent,
    SafePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: useFactory,
      deps: [ConfigService],
      multi: true
    },
    LoaderService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
