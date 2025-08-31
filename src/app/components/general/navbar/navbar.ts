import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//import { RouterLinkActive } from "../../../../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  menuOpen = false;
  dropdownOpen = false;

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() {
    this.menuOpen = false;
    this.dropdownOpen = false;
  }



  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
