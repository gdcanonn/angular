import { Injectable } from '@angular/core';
import { User, Menu } from '../_models/index';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  constructor() { }

  public getMenus(): Array<Menu> {
    /*if (window.localStorage) {
      const userJson = localStorage.getItem('user');
      let user: User;
      user = JSON.parse(userJson);
      if (user != null) {
        return user.menus;
      } else {
        return null;
      }
    } */

    let menu1 = new Menu();
    menu1.name = 'Calendario';

    let menu2 = new Menu();
    menu2.name = 'Administración General';

    let menu3 = new Menu();
    menu3.name = 'Administración de Servicios';

    let menus: Array<Menu>;
    menus = [menu1, menu2, menu3];

    return menus;
  }

  public getUserName(): String {
      const userJson = localStorage.getItem('user');
      let user: User;
      user = JSON.parse(userJson);
      return user.name;
  }

}
