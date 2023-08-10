import { Component, NgZone, ViewEncapsulation } from '@angular/core';
import { IconsService } from 'src/app/_services';

/** A helper class describing a navigation link */
class NavigationItem {
  /** The link provided to the `routerLink` directive */
  routerLink: string = '';
  /** The user-visible text of the link */
  displayText: string = '';
}

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css'],
  encapsulation: ViewEncapsulation.None
})
/** The primary navigation bar of the application */
export class MainNavigationComponent {
  /** A media query for screen size, matching on small screens */
  #mediaQueryMatcher: MediaQueryList | MediaQueryListEvent;

  /** The navigation links to present in the navbar */
  public navItems: NavigationItem[] = [
    { routerLink: '/recipes', displayText: 'Recipes' },
    { routerLink: '/foods', displayText: 'Foods' },
    { routerLink: '/pantry', displayText: 'Pantry' },
    { routerLink: '/planning', displayText: 'Planning' },
  ]

  /** Is the current window size small enough to switch the navigation style to a more compact form? */
  public get isScreenSmall(): boolean {
    const isSmall = this.#mediaQueryMatcher.matches;
    // Forcibly reset the state of the hamburger menu; if the screen becomes small again, it should be hidden by default
    if (!isSmall)
    this.hamburgerMenuOpen = false;
    return isSmall;
  }

  /** Is the hamburger menu, only available when `isScreenSmall` is true, open? */
  public get hamburgerMenuOpen(): boolean {
    return this.isScreenSmall && this.#hamburgerMenuOpen;
  }
  /**
   * @param value - The desired new state of the menu
  */
  public set hamburgerMenuOpen(value: boolean) {
   this.#hamburgerMenuOpen = value;
  }
  #hamburgerMenuOpen: boolean = false;

  /**
   * Construct a new `MainNavigationComponent`
   * @param zone - A dependency-injected `NgZone` instance used for media query monitoring
   */
  public constructor(public icons: IconsService, private zone: NgZone) {
    this.#mediaQueryMatcher = matchMedia('(max-width: 40em)');
    this.#mediaQueryMatcher.addEventListener("change", (mql) => zone.run(() => this.#mediaQueryMatcher = mql));
  }
}
