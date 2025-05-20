import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktails';
  drinks:any []=[];
  constructor(public api: ApiserviceService){
    this.api.getdata().subscribe((data: any)=>this.drinks=data)
  }
}
