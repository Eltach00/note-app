import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { INote } from 'src/app/models/note.interface';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent {
  @Output() onAdd = new EventEmitter<INote>();
  noteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.noteForm = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
  addNote() {
    if (
      this.noteForm.controls['title'].value.trim() === '' ||
      this.noteForm.controls['description'].value.trim() === ''
    ) {
      return;
    } else {
      const data: INote = this.noteForm.value;
      data.id = Math.random();
      this.onAdd.emit(data);
    }
  }
}
