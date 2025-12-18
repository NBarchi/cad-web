import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cad-web';

  showLayout: boolean = true;

  constructor(private router: Router) {}


  ngOnInit() {
    this.router.events.subscribe(() => {
      const hiddenRoutes = ['/admin'];
      this.showLayout = !hiddenRoutes.includes(this.router.url);
    });
  }

}
