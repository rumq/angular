import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SimplePipesComponent } from './simple-pipes/simple-pipes.component';
import { SlicePipeComponent } from './slice-pipe/slice-pipe.component';
import { I18nPluralPipeComponent } from './i18n-plural-pipe/i18n-plural-pipe.component';
import { I18nSelectPipeComponent } from './i18n-select-pipe/i18n-select-pipe.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { FlexiTitleCasePipe } from './flexi-title-case.pipe';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimplePipesComponent,
    SlicePipeComponent,
    I18nPluralPipeComponent,
    I18nSelectPipeComponent,
    AsyncPipeComponent,
    FlexiTitleCasePipe,
    CustomPipesComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
