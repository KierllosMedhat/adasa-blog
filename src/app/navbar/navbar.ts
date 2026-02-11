import { Component } from '@angular/core';
import { FaIconComponent, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [FaIconComponent, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  faSearch = faSearch;
}
