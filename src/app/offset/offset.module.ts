import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffsetTargetDirective } from './offset-target.directive';
import { OffsetSourceDirective } from './offset-source.directive';
import { OffsetContainerDirective } from './offset-container.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OffsetTargetDirective,
    OffsetSourceDirective,
    OffsetContainerDirective
  ],
  exports: [
    OffsetTargetDirective,
    OffsetSourceDirective,
    OffsetContainerDirective
  ]
})
export class OffsetModule { }
