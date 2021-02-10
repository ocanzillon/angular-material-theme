import { Component } from '@angular/core';

import { Theme } from '../../model/theme.model';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

  constructor(private readonly themeService: ThemeService) {
  }

  get theme$() {
    return this.themeService.theme$;
  }

  get themes() {
    return this.themeService.availableThemes;
  }

  onThemeChange(theme: Theme) {
    this.themeService.setTheme(theme);
  }

  onDefaultTheme() {
    this.themeService.setDefaultTheme();
  }

  onNextTheme() {
    this.themeService.setNextTheme();
  }

}
