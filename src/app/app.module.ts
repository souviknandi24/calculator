import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './components/button/button.component';
import { CalculusComponent } from './components/calculus/calculus.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { FinanceComponent } from './components/finance/finance.component';
import { GlassButtonComponent } from './components/glass-button/glass-button.component';
import { GraphComponent } from './components/graph/graph.component';
import { MessageService } from 'primeng/api';
import { NgModule } from '@angular/core';
import { ScientificComponent } from './components/scientific/scientific.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ScientificComponent,
    GraphComponent,
    CalculusComponent,
    StatisticsComponent,
    ConverterComponent,
    CurrencyComponent,
    ButtonComponent,
    FinanceComponent,
    GlassButtonComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, TabMenuModule, ToastModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
