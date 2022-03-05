import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ExitGuard } from '../guards/exit.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PizzaDetailComponent } from './pages/pizza-detail/pizza-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'profile',
        canActivate:[AuthGuard],
        component: ProfileComponent,
      },
      {
        path: 'pizza/:pizzaId',
        component: PizzaDetailComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
        canDeactivate: [ExitGuard],
        data: {
          preload: false,
        },
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
