import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public url ='../index.html';
public url2 = ('http://localhost:4200/');

  constructor() { }

  ngOnInit() { }

  public logout () 
  {
   window.location.assign(this.url);
  }

  public stayLoggedIn()
  {
    window.location.assign(this.url2);
  }
}