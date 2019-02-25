import { Component, OnInit, ViewChild } from '@angular/core';
// import {
//   StoriesComponent,
//   StoryComponent, TrainComponent
// } from 'ng-ai-chatbot';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public show = 'chat';
  public debug = false;
  bot;

  constructor() {

  }

  ngOnInit() {

  }

  setBotStories(bot) {
    this.bot = bot;
    this.show = 'stories';
  }

}
