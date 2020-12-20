import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './components/basic/basic.component';
import { CalculusComponent } from './components/calculus/calculus.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { FinanceComponent } from './components/finance/finance.component';
import { GraphComponent } from './components/graph/graph.component';
import { NgModule } from '@angular/core';
import { ScientificComponent } from './components/scientific/scientific.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

const routes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'scientific', component: ScientificComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'calculus', component: CalculusComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'converter', component: ConverterComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'finance', component: FinanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
