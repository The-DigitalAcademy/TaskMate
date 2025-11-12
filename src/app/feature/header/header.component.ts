import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // fixed path

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  isDarkMode = false;
  name: any;
  user: any;

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    this.authService.currentUser$.subscribe(u => this.user = u);
    if (theme === 'dark') {
      this.isDarkMode = true;
      this.enableDarkMode();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.enableDarkMode();
      localStorage.setItem('theme', 'dark');
    } else {
      this.disableDarkMode();
      localStorage.setItem('theme', 'light');
    }
  }

  enableDarkMode() {
    document.body.classList.add('dark-theme');
  }

  disableDarkMode() {
    document.body.classList.remove('dark-theme');
  }
}
