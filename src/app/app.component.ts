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
  data: INote[] = INITDATA;
  desc: string = this.data[0].description;

  constructor(private title: Title) {
    this.title.setTitle('Make notes for sure');
  }

  onChanged(id: number) {
    this.desc = this.data.find((n) => n.id === id).description;
  }

  addNewNote(note: INote) {
    const index = this.data.push(note);
    this.desc = this.data[index - 1].description;
  }
}
