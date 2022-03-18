import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  showMenu: boolean = false;
  constructor() { }

  clickEvent() {
    this.showMenu = !this.showMenu;
  }
}
