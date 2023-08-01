import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INote } from 'src/app/models/note.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Input() data: INote[];
  @Output() onChange = new EventEmitter<number>();

  constructor() {
  }

  onClick(id: number) {
    this.onChange.emit(id)
  }

}
