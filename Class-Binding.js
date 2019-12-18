import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
   <h1> 
     welcome {{name}}
   </h1>
   <h1 class="text-success">
       Sandy
   </h1>
   <h1 [class]="successClass">
      Sandy
   </h1>
   <h1 class="texdt-special" [class]="successClass">
      Sandy
   </h1>
   <h1 [class.text-danger]="hasError">
      Sandy
   </h1>
   <h1 [ngClass]="messageClasses">
      Sandy
   </h1>
  


  `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }

  `]
})
export class TestComponent implements OnInit {

  public name = "sandy";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial= true;
  public messageClasses = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }


  constructor() { }

  ngOnInit() {
  }
  greetUser()
  {
    return "hello"+this.name;
  }

}
