import { Component } from '@angular/core';
import { CompanyListComponent } from "./company-list/company-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompanyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh-front';
}
