import { Component } from '@angular/core';

export interface AccordionItems {
  title: string;
  content: string;
}

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;
  items: AccordionItems[] = [
    { title: 'Why are you here?', content: 'Because' },
    { title: 'Are you?', content: 'Aha' },
    { title: 'Oh my, really?', content: 'Yes' }
  ]

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
