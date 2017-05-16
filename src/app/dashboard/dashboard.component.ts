import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/index';
import { Menu } from '../_models/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  menus: Array<Menu>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menus = this.menuService.getMenus();
  }

  getIcon(name: string) {
    let urlIcon: String;
    const baseUrl = '../../assets/img';
    switch (name) {
      case 'Gestión espacial':
          urlIcon = `${baseUrl}/dash_icon1.png`;
          break;
      case 'Calendario':
          urlIcon = `${baseUrl}/dash_icon2.png`;
          break;
      case 'Análisis de Datos':
          urlIcon = `${baseUrl}/dash_icon3.png`;
          break;
      case 'Administración General':
          urlIcon = `${baseUrl}/dash_icon4.png`;
          break;
      case 'Administración Comercial':
          urlIcon = `${baseUrl}/dash_icon5.png`;
          break;
      case 'Administración de Servicios':
          urlIcon = `${baseUrl}/dash_icon6.png`;
          break;
      case 'Reportes':
          urlIcon = `${baseUrl}/dash_icon7.png`;
          break;
      case 'CRM':
          urlIcon = `${baseUrl}/dash_icon8.png`;
          break;
      default: // ERP
          urlIcon = `${baseUrl}/dash_icon9.png`;
    }
    return urlIcon;
  }

}
