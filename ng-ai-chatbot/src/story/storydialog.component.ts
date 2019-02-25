import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ng-ai-chatbot-storydialog',
    template: '<ng-ai-chatbot-story [story]="story" [afterSave]="close.bind(this)"></ng-ai-chatbot-story>',
})
export class StoryDialogComponent {
    story;

    constructor(
        public dialogRef: MatDialogRef<StoryDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        if (data.story) {
            this.story = data.story;
        }
    }

    close(response): void {
        this.dialogRef.close();
    }

}

