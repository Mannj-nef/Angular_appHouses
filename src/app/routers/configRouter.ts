import { Routes } from '@angular/router';
import { MainComponent } from '../layouts/main/main.component';
import { HomeComponent } from '../page/home/home.component';
import { HousingDetailComponent } from '../modules/details/housing/housing-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        title: 'home',
        path: 'home',
        component: HomeComponent,
      },
      {
        title: 'housing detail',
        path: 'detail/:id',
        component: HousingDetailComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

export default routes;
