import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  bools:boolean[]=[true, false];
  nums:number[]=[1,2.5,5];
  str:string[]=['hi','there'];

  test=[{id:1,name:'test'}];
  user=[{id:2, name:'user'}];
  objs=[{
    id:1,name:'test'
  },
  {
    id:2, name:'user'
  },
  {
    bools:true && false
  },
  {
    nums:1 && 2.5 && 5
  },
  {
    str:'hi' && 'there'
  }
];

  types:any[]=[
    this.bools,this.nums,this.str
  ];

  getTypeof(x){
    console.log(this.types); 
    return typeof x;  
    
  }

}



