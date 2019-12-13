import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ArticleComponent } from './article/article.component';
import { PictureComponent } from './picture/picture.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StoringAppComponent } from './projects/storing-app/storing-app.component';
import { BudgetAppComponent } from './projects/budget-app/budget-app.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'offer', component: OfferComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'picture', component: PictureComponent},
  {path: 'projects/storing-app', component: StoringAppComponent},
  {path: 'projects/budget-app', component: BudgetAppComponent},
  {path: '',redirectTo: '/home',pathMatch: 'full' },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
