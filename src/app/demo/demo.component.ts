import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  title='HelloWorld';

  ngOnInit(): void{
    this.title = "Hello from Bridgelabz.";
  }
}
