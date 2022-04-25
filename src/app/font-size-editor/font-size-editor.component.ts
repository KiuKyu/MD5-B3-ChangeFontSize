import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {
  fontSize = 14;

  // Sử dụng sự kiện (change) để thay đổi thuộc tính
  // changeFontSizeValue(fontSize) {
  //   this.fontSize = fontSize;
  // }

  constructor() {
  }

  ngOnInit() {
  }

}
