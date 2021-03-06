import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {Shoppinglist} from "../../shared/shoppinglist";
import {AuthService} from "../../servives/auth.service";


@Component({
  selector: 'bs-home',
  templateUrl: './home.component.html',
  styles: []
})

export class HomeComponent implements OnInit {

  listOn = true;
  detailOn = false;

  shoppinglist: Shoppinglist;


  constructor(private as: AuthService) { }

  ngOnInit(): void {
  }

  showList(){
    this.listOn = true;
    this.detailOn = false;
  }

  showDetail(shoppinglist: Shoppinglist){
    this.shoppinglist = shoppinglist;
    this.listOn = false;
    this.detailOn = true;
  }

  isHelper(){
    return !!localStorage.getItem("isHelper");
  }

  isLoggedIn(){
    return !!localStorage.getItem("token");
  }

  logout(){
    this.listOn = true;
    this.detailOn = false;
    this.as.logout();
  }

}
