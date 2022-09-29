import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'demo-organization',        loadChildren: () => import('./demo-organization/demo-organization.module').then(m => m.DemoOrganizationModule) },
  { path: 'demo-component-hierarchy', loadChildren: () => import('./demo-component-hierarchy/demo-component-hierarchy.module').then(m => m.DemoComponentHierarchyModule) },
  { path: 'demo-component-inputs',    loadChildren: () => import('./demo-component-inputs/demo-component-inputs.module').then(m => m.DemoComponentInputsModule) },
  { path: 'demo-component-outputs',   loadChildren: () => import('./demo-component-outputs/demo-component-outputs.module').then(m => m.DemoComponentOutputsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
