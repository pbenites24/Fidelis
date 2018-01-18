 
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
   alerts: any[];
   constructor(private http: HttpClient) { }
 
   ngOnInit(){
    console.log('ALERTS INIT')
    this.http.get('/assets/alerts.json').subscribe((resp: any[]) =>{
      console.log('ALERTS LOADED', resp);
      this.alerts = resp;
    })
   }

   ngOnDestroy(){
    console.log('ALERTS DESTROY')
   }
}

