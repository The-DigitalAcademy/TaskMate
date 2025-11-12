import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService);
  // Set to light mode by default
  isDarkMode = false;

name: any;

user: any;


  ngOnInit(): void {
    // Load saved localStorage preference
    const theme = localStorage.getItem('theme');
    this.authService.currentUser$.subscribe(u => this.user = u);
    // If dark saved enable dark mode
    if (theme === 'dark') {
      this.isDarkMode = true;
      this.enableDarkMode();
    }
  }

  toggleTheme() {
    // Change theme to opposite of current
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      // If it is dark mode enable dark mode and save in localStorage
      this.enableDarkMode();
      localStorage.setItem('theme', 'dark');
    } else {
      // If it is light mode disable dark mode and save in localStorage
      this.disableDarkMode();
      localStorage.setItem('theme', 'light');
    }
  }

  // Add dark mode class when called
  enableDarkMode() {
    document.body.classList.add('dark-theme');
  }

  // Remoce dark mode class when called
  disableDarkMode() {
    document.body.classList.remove('dark-theme');
  }
}
