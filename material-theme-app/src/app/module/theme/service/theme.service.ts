import { Inject, Injectable, InjectionToken } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { AVAILABLE_THEMES, Theme, ThemeConfig } from '../model/theme.model';

export const THEME_CONFIG = new InjectionToken<ThemeConfig>('themeConfig');

@Injectable()
export class ThemeService {
  private readonly defaultTheme: Theme;
  private currentTheme: Theme;
  private readonly _theme$: Subject<string> = new BehaviorSubject('');
  theme$: Observable<string> = this._theme$.asObservable();

  constructor(@Inject(THEME_CONFIG) config,
              private readonly overlayContainer: OverlayContainer) {
    // Define the default theme as the configured one
    this.defaultTheme = config.theme;

    // Set the current theme as the default one
    this.setDefaultTheme();
  }

  private emitTheme(newTheme: Theme) {
    // Get the old theme
    const oldTheme = this.currentTheme;

    // Remove the old theme class and add the new theme class to the overlay container
    if (oldTheme) {
      this.overlayContainer.getContainerElement().classList.remove(oldTheme);
    }
    if (newTheme) {
      this.overlayContainer.getContainerElement().classList.add(newTheme);
    }

    // Change to the new theme and emit the value
    this.currentTheme = newTheme;
    this._theme$.next(newTheme);
  }

  /**
   * Return the available themes as an array
   */
  get availableThemes(): Theme[] {
    return [...AVAILABLE_THEMES];
  }

  /**
   * Set the current theme as the default theme
   */
  setDefaultTheme() {
    this.emitTheme(this.defaultTheme);
  }

  /**
   * Set the current theme
   * @param theme theme to be the current one
   */
  setTheme(theme: Theme) {
    this.emitTheme(theme);
  }

  /**
   * Set the theme as the next available one
   */
  setNextTheme() {
    const currentIndex = this.availableThemes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % this.availableThemes.length;
    const nextTheme = this.availableThemes[nextIndex];
    this.emitTheme(nextTheme);
  }

}
