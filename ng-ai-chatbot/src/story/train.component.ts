import { Component, OnInit, Input } from '@angular/core';
import { StoryService } from './story.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-ai-chatbot-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css', './flexboxgrid.css']
})
export class TrainComponent implements OnInit {
  message;

  trainForm: FormGroup;
  trainFormFields: any;

  testForm: FormGroup;
  testFormFields: any;

  @Input()
  story;

  labelled;

  constructor(
    public fb: FormBuilder,
    public storyService: StoryService) {

    this.trainFormFields = {
      input: [''],
    };
    this.trainForm = this.fb.group(this.trainFormFields);

    this.testFormFields = {
      input: [''],
    };
    this.testForm = this.fb.group(this.testFormFields);

  }

  ngOnInit() {
    console.log(this.story);
    if (this.story) {
      if (this.story._id && this.story._id.$oid) {
        this.story._id = this.story._id.$oid;
      }
    }
  }

  addTest() {

  }

  buildModel() {
    this.storyService.buildStory(this.story._id)
      .then(c => {
        this.message = 'Build sucessfull';
      })
      .catch(c => {
        this.message = 'Error on Building';
      })
  }

  clear() {
    this.trainForm.reset();
  }

  startLabeling() {
    const form = this.trainForm.value;
    this.storyService.startLabeling(form.input)
      .then(c => {
        this.labelled = c;
        // this.message = 'Build sucessfull';
      })
      .catch(c => {
        this.message = 'Error on labelling';
      })
  }

  deleteSetence(i) {
    const array = this.story.labeledSentences;
    array.splice(i, 1);
  }



}
