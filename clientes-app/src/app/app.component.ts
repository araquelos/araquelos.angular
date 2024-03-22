import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./template/navbar/navbar.component";
import { SidebarComponent } from "./template/sidebar/sidebar.component";
import jQuery from 'jquery'
import { HomeComponent } from "./home/home.component";
//import { ClientesFormComponent } from "./clientes/clientes-form/clientes-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, SidebarComponent, HomeComponent]
})
export class AppComponent implements AfterViewInit {
  title = 'clientes-app';
  ngAfterViewInit() {
    (function($) {
      "use strict";
  
      // Add active state to sidbar nav links
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
              if (this instanceof HTMLAnchorElement && this.href === path) {
                  $(this).addClass("active");
              }
          });
  
      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);
    
  }
}
