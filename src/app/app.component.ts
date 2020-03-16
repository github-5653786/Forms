import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showIcon: boolean;
  showIcons: boolean;
  constructor() {
    this.showIcon = false;
    this.showIcons = true;
  }
  onSubmit() {
    window.location.reload();
  }

  iconHide() {
    let a = (document.getElementById("Password") as HTMLInputElement);
    if (a.type === 'password') {
      a.type = 'text';
      this.showIcon = true;
      this.showIcons = false;

    } else {
      a.type = 'password';
      this.showIcon = false;
      this.showIcons = true;

    }
  }
}
