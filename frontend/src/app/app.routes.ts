import { Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [
  { path: 'tasks', component: TaskComponent },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  {
    path: 'tasks/update/:id',
    loadComponent: () => import('./pages/update-task/update-task.component').then(m => m.UpdateTaskComponent)
  },
  

  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
];
