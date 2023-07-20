import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'alexis';
  public nameUpper: string = 'PARRA';
  public fullName: string = 'AleXiS paRRa';

  public customDate: Date = new Date();

}
