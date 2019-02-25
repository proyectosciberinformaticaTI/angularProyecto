import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, Input } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ng-ai-chatbot-traindialog',
    template: '<ng-ai-chatbot-train [story]="story"></ng-ai-chatbot-train>',
})
export class TrainDialogComponent {
    @Input()
    story;

    constructor(
        public dialogRef: MatDialogRef<TrainDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        if (data && data.story) {
            this.story = data.story;
        }
    }

    close(): void {
        this.dialogRef.close();
    }
}
