import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-column',
  templateUrl: './middle-column.component.html',
  styleUrls: ['./middle-column.component.css'],
})
export class MiddleColumnComponent implements OnInit {
  constructor() {}

  @Input() isLoading: boolean;

  ngOnInit(): void {}
}
