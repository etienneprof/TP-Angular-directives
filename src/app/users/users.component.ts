import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users : Array<string> = [
    "Etienne",
    "Thomas",
    "Hisseine",
    "Patrice",
    "Raphaël"
  ];
}
