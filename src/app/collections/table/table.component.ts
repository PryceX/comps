import { Component, Input } from '@angular/core';

interface TableData {
  [key: string]: any,
  name: string, 
  age: number, 
  job: string,
}

interface TableHeaders {
  key: string,
  label: string,
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() classNames = ''; 

  @Input() data: TableData[] = [];
  @Input() headers: TableHeaders[] = [];
}
