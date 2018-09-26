import { NgModule } from '@angular/core';

import { LinkyPipe } from './linky.pipe';

@NgModule({
  declarations: [LinkyPipe],
  exports: [LinkyPipe],
})
export class LinkyModule { }
