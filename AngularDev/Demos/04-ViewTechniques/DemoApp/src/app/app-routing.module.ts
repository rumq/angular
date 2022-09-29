import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SimplePipesComponent } from './simple-pipes/simple-pipes.component';
import { SlicePipeComponent } from './slice-pipe/slice-pipe.component';
import { I18nPluralPipeComponent } from './i18n-plural-pipe/i18n-plural-pipe.component';
import { I18nSelectPipeComponent } from './i18n-select-pipe/i18n-select-pipe.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simple-pipes', component: SimplePipesComponent },
  { path: 'slice-pipe', component: SlicePipeComponent },
  { path: 'i18nPlural-pipe', component: I18nPluralPipeComponent },
  { path: 'i18nSelect-pipe', component: I18nSelectPipeComponent },
  { path: 'async-pipe', component: AsyncPipeComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'custom-pipes', component: CustomPipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
