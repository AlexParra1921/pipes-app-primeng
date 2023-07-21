import { NgModule } from '@angular/core';

import { FieldsetModule } from 'primeng/fieldset';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    FieldsetModule,
    ToolbarModule,
    MenubarModule,
    ButtonModule,
    PanelModule,
    TableModule,
    CardModule,
  ]
})
export class PrimeNgModule { }
