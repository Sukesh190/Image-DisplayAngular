import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: ImageService) {
  }
  ngOnInit() { 
    // this.service.getImage(); 
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
}
