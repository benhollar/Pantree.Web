import { Injectable } from '@angular/core';
import {
  faBacon, faClock, faClose, faDumbbell, faFire, faHamburger, faUsers, faWheatAwn
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
/**
 * A singleton service for accessing FontAwesome icons
 */
export class IconsService {
  close = faClose;
  hamburger = faHamburger;
  users = faUsers;
  clock = faClock;
  fire = faFire;
  wheat = faWheatAwn;
  bacon = faBacon;
  dumbbell = faDumbbell;
}
