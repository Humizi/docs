import { BlockComponent } from './block/block.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageMenuComponent } from './page-menu/page-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [PageMenuComponent, BlockComponent],
  exports: [PageMenuComponent, BlockComponent],
})
export class ComponentsModule {}