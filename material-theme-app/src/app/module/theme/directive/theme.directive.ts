import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ThemeService } from '../service/theme.service';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(private readonly el: ElementRef,
              private readonly themeService: ThemeService) {
  }

  ngOnInit(): void {
    // Subscribe to the theme observable and modify the element class accordingly
    this.sub = this.themeService.theme$.subscribe(theme => this.el.nativeElement.className = theme);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
