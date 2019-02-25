import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { StoriesComponent } from './story/stories.component';
import { TrainComponent } from './story/train.component';
import { StoryService } from './story/story.service';
import { ChatService } from './chat/chat.service';
import { StoryComponent } from './story/story.component';
import {
  MatToolbarModule, MatIconModule, MatCardModule,
  MatButtonModule, MatDialogModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatListModule, MatGridListModule, MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoryDialogComponent } from './story/storydialog.component';
import { TrainDialogComponent } from './story/traindialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreService } from './core/core.service';
import { BotsComponent } from './story/bots.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule, MatCardModule, MatButtonModule, MatDialogModule,
    MatCheckboxModule, MatIconModule, MatListModule, MatGridListModule, MatSelectModule,
    MatToolbarModule, MatIconModule, MatFormFieldModule // MatToolbarModule
  ],
  declarations: [
    ChatComponent, StoriesComponent, StoryComponent, TrainComponent,
    StoryDialogComponent, TrainDialogComponent, BotsComponent
  ],
  exports: [
    ChatComponent, StoriesComponent, StoryComponent, TrainComponent,
    StoryDialogComponent, TrainDialogComponent, BotsComponent
  ],
  providers: [CoreService, StoryService, ChatService],
  entryComponents: [StoryDialogComponent, TrainDialogComponent, BotsComponent]
})
export class NgAiChatbot {

  public static forRoot(): ModuleWithProviders {

    return {
      ngModule: NgAiChatbot,
      providers: [
      ]
    };
  }
}


