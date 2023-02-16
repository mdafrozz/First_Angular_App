import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  title='HelloWorld';
  imgUrl = "https://www.educationworld.in/wp-content/uploads/2020/06/BridgeLabz-2.jpg";

  ngOnInit(): void{
    this.title = "Hello from Bridgelabz.";
  }
}
