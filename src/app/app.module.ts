import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {
  NgAiChatbot
  // , StoriesComponent,
  // StoryComponent, TrainComponent
} from 'ng-ai-chatbot';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  { path: 'demo', component: DemoComponent },
  // { component: StoriesComponent, path: 'stories' },
  // { component: StoryComponent, path: 'story/new' },
  // { component: TrainComponent, path: 'story/train/:id' },
  // { component: StoryComponent, path: 'story/:id' },
  // { component: ChatComponent, name: 'Chat', segment: '/' },
// { component: ChatComponent, name: 'ChatDebug', segment: '/debug' }
];

@NgModule({
  declarations: [
    AppComponent, DemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgAiChatbot,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
