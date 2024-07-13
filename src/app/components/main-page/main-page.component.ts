import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, SidenavComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {}
