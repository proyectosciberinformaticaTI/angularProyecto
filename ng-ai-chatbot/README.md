# Angular AI ChatBot 

Angular 5 components to create chat and to manage stories, train the bot and build it.

Working with latest Angular 5. 

![Demo Image](/src/assets/print.png)

## Installation

To install this library with npm, run below command:

$ npm install --save ng-ai-chatbot

See the npm package list: npmjs.com/package/ng-ai-chatbot

## Usage

### Configuration

First, Import Angular  JsonEditor module in root

```ts
import { NgAiChatbot } from 'angular-jsoneditor' 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ....,
    NgAiChatbot
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Then setup your component models as below :

```ts
import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ng-ai-chatbot';

@Component({
  selector: 'app-root',
  template: '<ng-ai-chatbot-chat></ng-ai-chatbot-chat>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { 
   
  }

}
```

Remember to install angular material and others, check the dependencies:

``` 
    "@angular/core": ">=5.0.0",
    "@angular/common": ">=5.0.0",
    "@angular/material": ">=5.0.0",
    "@angular/cdk": ">=5.0.0",
    "@angular/platform-browser": ">=5.0.0",
    "@angular/platform-browser-dynamic": ">=5.0.0",
    "@angular/animations": ">=5.0.0" 
```

# Components

Shows the chat to talk to the bot.

`<ng-ai-chatbot-chat>`

If you want a view to manage the stories, call component

`<ng-ai-chatbot-stories>`


# Demo

Demo component files are included in Git Project.

Demo Project:
* https://github.com/mariohmol/ng-ai-chatbot/tree/master/src/app/demo

# Colaborate

Want to help and make it better?
You can make your questions at: 
* https://gitter.im/ai-chatbot-framework/Lobby

And to start working, fork, clone and run:

Install all dependencies

* npm install

Make the lib:

* npm run build:lib

Make the demo app:

* npm run build:app

Start demo app:

* npm run start

Start the a-chatbot server

* npm run server

# License

MIT(./LICENSE)