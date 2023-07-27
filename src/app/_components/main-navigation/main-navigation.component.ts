import { Component, NgZone, ViewEncapsulation } from '@angular/core';

class NavigationItem {
  routerLink: string = '';
  displayText: string = '';
}

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainNavigationComponent {

  #mediaQueryMatcher: MediaQueryList | MediaQueryListEvent;

  #hamburgerMenuOpen: boolean = false;

  public navItems: NavigationItem[] = [
    { routerLink: '/recipes', displayText: 'Recipes' },
    { routerLink: '/foods', displayText: 'Foods' },
    { routerLink: '/pantry', displayText: 'Pantry' },
    { routerLink: '/planning', displayText: 'Planning' },
  ]

  public get isScreenSmall(): boolean {
    const isSmall = this.#mediaQueryMatcher.matches;
    // Forcibly reset the state of the hamburger menu; if the screen becomes small again, it should be hidden by default
    if (!isSmall)
      this.hamburgerMenuOpen = false;
    return isSmall;
  }

  public get hamburgerMenuOpen(): boolean {
    return this.isScreenSmall && this.#hamburgerMenuOpen;
  }
  public set hamburgerMenuOpen(value: boolean) {
    this.#hamburgerMenuOpen = value;
  }

  public constructor(private zone: NgZone) {
    this.#mediaQueryMatcher = matchMedia('(max-width: 40em)');
    this.#mediaQueryMatcher.addEventListener("change", (mql) => zone.run(() => this.#mediaQueryMatcher = mql));
  }
}
