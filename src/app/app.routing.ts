import { Routes, RouterModule } from '@angular/router';
import { BuildContainerComponent } from './build-container/build-container.component';
import { ConceptsListComponent } from './concepts-list/concepts-list.component';
import { ConceptListComponent } from './concepts-list/concept-list.component';
import { ContainerComponent } from './container/container.component';

const appRoutes: Routes = [
    { path: '', component: ConceptsListComponent, pathMatch: 'full' },
    { path: 'QA', component: ConceptsListComponent },
    { path: 'qa', redirectTo: '/QA' },
    { path: ':conceptName', component: ConceptListComponent },
    { path: 'QA/:conceptName', component: ConceptListComponent },
    { path: ':conceptName/:conceptSize', component: ContainerComponent },
    { path: 'QA/:conceptName/:conceptSize', component: BuildContainerComponent },
    { path: '**',   redirectTo: '/' }
];

export const routing = RouterModule.forRoot(appRoutes);
