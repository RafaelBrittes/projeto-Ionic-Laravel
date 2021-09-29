import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {
 
  constructor( private router: Router ) { }
  public url: string = "";
  ngOnInit() {
    
    this.url = this.router.url;

  }
}