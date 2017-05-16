import { Component, OnInit } from '@angular/core';
import { ForgetService, AlertService } from '../_services/index';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  email: string;

  constructor(private forgetService: ForgetService,
              private alertService: AlertService ) { }

  ngOnInit() {
  }

  recordarPassword(){
    this.forgetService.recordarPassword(this.email)
                      .subscribe(data => {
                        this.alertService.success('Se ha enviado un correo con las instrucciones');
                      }, error => {
                        this.alertService.error('Ha ocurrido un error');
                      });
  }

}
