import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes-desc',
  templateUrl: './notes-desc.component.html',
  styleUrls: ['./notes-desc.component.scss']
})
export class NotesDescComponent {
  @Input() desc: string
}
