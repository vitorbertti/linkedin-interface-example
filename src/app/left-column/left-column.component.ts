import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.css'],
})
export class LeftColumnComponent implements OnInit {
  constructor() {}

  @Input() isLoading: boolean;

  ngOnInit(): void {}
}
