import { Component, OnInit, Inject, Input } from '@angular/core';
import { StoryService } from './story.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { StoryDialogComponent } from './storydialog.component';
import { TrainDialogComponent } from './traindialog.component';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-ai-chatbot-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css', './flexboxgrid.css']
})
export class BotsComponent implements OnInit {
  botForm: FormGroup;
  botFormFields: any;
  bots: any;
  message;
  showAddForm = false;

  @Input()
  storiesBot;

  @Input()
  afterSave;

  constructor(public dialog: MatDialog,
    public fb: FormBuilder,
    public storyService: StoryService) { }

  ngOnInit() {
    this.botFormFields = {
      _id: [''],
      botName: [''],
      username: [''],
      password: ['']
    };
    this.botForm = this.fb.group(this.botFormFields);

    this.storyService.getBots().then((s: any) => {
      this.bots = s;
      this.bots.push({ botName: 'default' });
    });
  }


  stories(bot) {
    if (this.storiesBot) {
      this.storiesBot(bot);
    }
  }


  edit(bot) {

  }

  login() {
    const form = this.botForm.value;
    localStorage.botToken = btoa(`${form.username}:${form.password}`);
    this.storyService.getBots()
      .then(c => {
        this.bots = c;
      })
  }

  save() {
    const form = this.botForm.value;
    this.storyService.saveBot(form)
      .then(c => {
        if (this.afterSave) {
          this.afterSave(c);
        }
        this.ngOnInit();
        this.showAddForm = false;
      })
      .catch(c => {
        this.message = 'Error saving bot';
      });

  }

}
