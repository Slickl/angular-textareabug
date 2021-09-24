import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Component, NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';

/** @title Auto-resizing textarea */
@Component({
  selector: 'text-field-autosize-textarea-example',
  templateUrl: './text-field-autosize-textarea-example.html',
  styleUrls: ['./text-field-autosize-textarea-example.css'],
})
export class TextFieldAutosizeTextareaExample {
  show = false;
  constructor() {
    setTimeout(()=>{
      this.show = true;
    })
  }

  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */