import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  title='HelloWorld';
  imgUrl = "https://www.educationworld.in/wp-content/uploads/2020/06/BridgeLabz-2.jpg"; 
  userName: string = "";
  errorMsg: string=""

  ngOnInit(): void{
    this.title = "Hello from Bridgelabz.";
  }

  onClick(event: any){
    console.log(event);
    window.open("https://www.bridgelabz.com/");
  }

  onInput(event: any){
    console.log(event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
    if(nameRegex.test(this.userName))
    {
      this.errorMsg="";
      return;
    }
    this.errorMsg="Name is Incorrect";
  }
}

