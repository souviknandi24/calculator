import { MenuItem, PrimeNGConfig } from 'primeng/api';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  title = 'calculator';
  items: MenuItem[] = [
    { label: 'Basic', icon: 'fas fa-calculator', routerLink: ['/basic'] },
    { label: 'Scientific', icon: 'fas fa-square-root-alt', routerLink: ['/scientific'] },
    { label: 'Graph', icon: 'fas fa-chart-line', routerLink: ['/graph'] },
    { label: 'Calculus', icon: 'fas fa-infinity', routerLink: ['/calculus'] },
    { label: 'Statistics', icon: 'fas fa-chart-bar', routerLink: ['/statistics'] },
    { label: 'Converter', icon: 'fas fa-balance-scale', routerLink: ['/converter'] },
    { label: 'Currency', icon: 'fas fa-rupee-sign', routerLink: ['/currency'] },
    { label: 'Finance', icon: 'fas fa-coins', routerLink: ['/finance'] },
  ];
  activeItem: MenuItem = this.items[0];

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
