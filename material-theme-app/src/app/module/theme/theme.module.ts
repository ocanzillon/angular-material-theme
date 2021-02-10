import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material.module';
import { ThemeConfig } from './model/theme.model';
import { THEME_CONFIG, ThemeService } from './service/theme.service';
import { ThemeComponent } from './component/theme/theme.component';
import { ThemeDirective } from './directive/theme.directive';

@NgModule({
  declarations: [
    ThemeComponent,
    ThemeDirective
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ThemeComponent,
    ThemeDirective
  ],
  providers: [
    ThemeService,
    // Default theme if no configuration is provided
    { provide: THEME_CONFIG, useValue: { theme: 'theme-purple-orange-theme' } }
  ]
})
export class ThemeModule {

  static forRoot(config: ThemeConfig): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [{ provide: THEME_CONFIG, useValue: config }]
    };
  }

}
