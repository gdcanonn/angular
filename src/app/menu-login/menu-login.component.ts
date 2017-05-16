import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/index';

@Component({
  selector: 'app-menu-login',
  templateUrl: './menu-login.component.html',
  styleUrls: ['./menu-login.component.css']
})
export class MenuLoginComponent implements OnInit {

  userName: String;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.userName = this.menuService.getUserName();
  }

}
