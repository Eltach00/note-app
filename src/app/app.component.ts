import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { INote } from './models/note.interface';
import { INITDATA } from './data/testData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: INote[];
  desc: string
  chosen: number

  constructor(private title: Title) {
    this.title.setTitle('Make notes for sure');
    this.init()

  }
  init() {
    const dataFromStorage = JSON.parse(localStorage.getItem('notesData'))  as INote[]
    this.data = dataFromStorage || INITDATA
    this.desc = this.data[0].description;
    this.chosen = this.data[0].id
  }

  onChanged(id: number) {
    this.desc = this.data.find((n) => n.id === id).description;
    this.chosen = this.data.find((n) => n.id === id).id;

  }

  addNewNote(note: INote) {
    const index = this.data.push(note);
    this.desc = this.data[index - 1].description;
    localStorage.setItem('notesData', JSON.stringify(this.data));
  }
}
