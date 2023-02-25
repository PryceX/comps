import { Component, Input } from '@angular/core';

interface Stats {
  value: number;
  label: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  @Input() data: Stats[] = [];
}
