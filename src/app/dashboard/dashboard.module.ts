import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Select2Module } from 'ng2-select2';
import 'jquery-slimscroll';

import { Dashboard } from './dashboard.component';
import { Chat } from './chat/chat.component';
import { WidgetModule } from '../layout/widget/widget.module';

import { Nvd3ChartModule } from './nvd3/nvd3.module';
import { JqSparklineModule } from '../layout/directives/sparkline/sparkline.module';


import 'ng2-datetime/src/vendor/bootstrap-datepicker/bootstrap-datepicker.min.js';
import 'ng2-datetime/src/vendor/bootstrap-timepicker/bootstrap-timepicker.min.js';
import { DatetimeTransparent} from '../ui/datetime-transparent/datetime-transparent.directive';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import { MorrisChartModule } from '../layout/directives/morris/morris.module';

export const routes = [
  { path: '', component: Dashboard, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Dashboard,
    DatetimeTransparent,
    Chat
  ],
  imports: [
    CommonModule,
    FormsModule,
    Nvd3ChartModule,
    WidgetModule,
    Select2Module,
    NKDatetimeModule,
    MorrisChartModule,
    JqSparklineModule,
    RouterModule.forChild(routes),
  ]
})
export default class DashboardModule {
  static routes = routes;
}
