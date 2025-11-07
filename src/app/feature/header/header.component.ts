import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  // Set to light mode by default
  isDarkMode = false;

  ngOnInit(): void {

    // Load saved localStorage preference
    const theme = localStorage.getItem('theme');

    // If dark saved enable dark mode
    if (theme === 'dark') {
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
