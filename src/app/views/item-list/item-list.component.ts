import { Component, Input } from '@angular/core';

interface ItemList {
  image?: string;
  title?: string;
  description?: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() items: ItemList[];
}
