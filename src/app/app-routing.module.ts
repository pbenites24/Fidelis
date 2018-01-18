import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent }  from './alerts/alerts.component';
import { MetadataComponent }  from './metadata/metadata.component';

const routes: Routes = [
    { path: 'metadata', component: MetadataComponent },
    { path: 'alerts', component: AlertsComponent }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}