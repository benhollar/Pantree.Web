import { Injectable } from '@angular/core';
import { IconDefinition, faClose, faHamburger } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
/**
 * A singleton service for accessing FontAwesome icons
 */
export class IconsService {
  close: IconDefinition = faClose;
  hamburger: IconDefinition = faHamburger;
}
