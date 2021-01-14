import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      imageUrl: 'assets/tree.jpeg',
      title: 'Neat tree',
      username: 'nature',
      content: 'Saw this awesome tree during my hike today.'
    },
    {
      imageUrl: 'assets/mountain.jpeg',
      title: 'Snowy Mountains',
      username: 'mountainlover',
      content: 'Here is a picture of a snowy mountain.'
    },
    {
      imageUrl: 'assets/biking.jpeg',
      title: 'man biking',
      username: 'bikingman',
      content: 'Some dude biking.'
    },
    {
      imageUrl: 'assets/biking.jpeg',
      title: 'man biking',
      username: 'bikingman',
      content: 'Some dude biking.'
    }
  ];
}
