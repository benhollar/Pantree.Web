import { Injectable } from '@angular/core';
import {
  faBacon, faClock, faClose, faDumbbell, faFire, faHamburger, faUsers, faWheatAwn, faStar, faStarHalfStroke
} from '@fortawesome/free-solid-svg-icons';

import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons';

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
  starFilled = faStar;
  starEmpty = faStarReg;
  starHalf = faStarHalfStroke;
}
