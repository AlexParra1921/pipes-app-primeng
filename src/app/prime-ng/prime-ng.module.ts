import { NgModule } from '@angular/core';

import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    FieldsetModule,
    MenubarModule,
    ButtonModule,
    PanelModule,
    CardModule,
  ]
})
export class PrimeNgModule { }
