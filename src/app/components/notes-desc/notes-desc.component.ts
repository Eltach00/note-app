import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notes-desc',
  templateUrl: './notes-desc.component.html',
  styleUrls: ['./notes-desc.component.scss']
})
export class NotesDescComponent {
  @Input() desc: string
  @Output() onDelete = new EventEmitter<true>()

  delete() {
    this.onDelete.emit(true);
  }
}
